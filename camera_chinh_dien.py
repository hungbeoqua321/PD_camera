import cv2
import mediapipe as mp
import math

# Khởi tạo đối tượng Mediapipe Pose
mp_pose = mp.solutions.pose
pose = mp_pose.Pose(min_detection_confidence=0.3, min_tracking_confidence=0.3)

# Khởi tạo đối tượng Mediapipe Drawing
mp_drawing = mp.solutions.drawing_utils

# Đường dẫn đến ảnh chụp
image_path = 'E:\\DHMT\\New folder\\PD_camera\\data\\files\\0\\front_img.jpg'

# Đọc ảnh
image = cv2.imread(image_path)

# Chiều cao của người (tự nhập)
height = float(input("Nhập chiều cao của người (cm): "))

# Chuyển đổi ảnh thành ảnh màu RGB
image_rgb = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)

# Nhận dạng các điểm mốc trên cơ thể
results = pose.process(image_rgb)

if results.pose_landmarks:
    landmarks = results.pose_landmarks.landmark

    # Tính toán tỷ lệ giữa chiều cao thực tế và chiều cao pixels để áp dụng vào đo đạc
    height_pixels = math.sqrt((landmarks[mp_pose.PoseLandmark.RIGHT_HIP].x * image.shape[1] - landmarks[mp_pose.PoseLandmark.LEFT_HIP].x * image.shape[1]) ** 2 +
                             (landmarks[mp_pose.PoseLandmark.RIGHT_HIP].y * image.shape[0] - landmarks[mp_pose.PoseLandmark.LEFT_HIP].y * image.shape[0]) ** 2)
    height_ratio = height / height_pixels

    # Tính toán chiều rộng của vai và chiều dài của cánh tay dựa trên chiều cao tỷ lệ
    shoulder_width = height_ratio * abs(landmarks[mp_pose.PoseLandmark.LEFT_SHOULDER].x * image.shape[1] - landmarks[mp_pose.PoseLandmark.RIGHT_SHOULDER].x * image.shape[1])
    arm_length = height_ratio * abs(landmarks[mp_pose.PoseLandmark.LEFT_WRIST].y * image.shape[0] - landmarks[mp_pose.PoseLandmark.LEFT_SHOULDER].y * image.shape[0])

    # Tính toán chiều rộng của ngực
    chest_width = height_ratio * abs(landmarks[mp_pose.PoseLandmark.RIGHT_SHOULDER].x * image.shape[1] - landmarks[mp_pose.PoseLandmark.LEFT_SHOULDER].x * image.shape[1])

    # Tính toán chiều dài chân
    leg_length = height_ratio * abs(landmarks[mp_pose.PoseLandmark.LEFT_HEEL].y * image.shape[0] - landmarks[mp_pose.PoseLandmark.LEFT_HIP].y * image.shape[0])

    # Hiển thị các chỉ số cơ thể
    cv2.putText(image, f"Shoulder Width: {shoulder_width:.2f} cm", (10, 30), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 0), 2)
    cv2.putText(image, f"Arm Length: {arm_length:.2f} cm", (10, 60), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 0), 2)
    cv2.putText(image, f"Chest Width: {chest_width:.2f} cm", (10, 90), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 0), 2)
    cv2.putText(image, f"Leg Length: {leg_length:.2f} cm", (10, 120), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 0), 2)

    # Vẽ các điểm mốc trên cơ thể
    mp_drawing.draw_landmarks(image, results.pose_landmarks, mp_pose.POSE_CONNECTIONS)

    # Hiển thị ảnh với các chỉ số cơ thể
    cv2.imshow('Body Measurements', image)
    cv2.waitKey(0)
    cv2.destroyAllWindows()

    # Lưu các chỉ số cơ thể và chiều cao vào một tệp JSON hoặc dạng dữ liệu khác nếu cần
    body_measurements = {
        "shoulder_width_cm": shoulder_width,
        "arm_length_cm": arm_length,
        "chest_width_cm": chest_width,
        "leg_length_cm": leg_length,
        "height_cm": height
    }
    print(body_measurements)
