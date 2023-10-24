import cv2
import mediapipe as mp
import math

# Khởi tạo đối tượng Mediapipe Pose
mp_pose = mp.solutions.pose
pose = mp_pose.Pose(min_detection_confidence=0.3, min_tracking_confidence=0.3)

# Khởi tạo đối tượng Mediapipe Drawing
mp_drawing = mp.solutions.drawing_utils

# Đường dẫn đến ảnh chụp
image_path = 'path_to_your_image.jpg'

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

    # Điểm mốc ở vai, cổ tay và hông
    shoulder = landmarks[mp_pose.PoseLandmark.LEFT_SHOULDER]
    wrist = landmarks[mp_pose.PoseLandmark.LEFT_WRIST]
    hip = landmarks[mp_pose.PoseLandmark.LEFT_HIP]

    # Tính toán tỷ lệ giữa chiều cao thực tế và chiều cao pixels để áp dụng vào đo đạc
    height_pixels = image.shape[0]
    height_ratio = height / height_pixels

    # Tính toán số đo ba vòng
    shoulder_width = height_ratio * abs(shoulder.x * image.shape[1] - hip.x * image.shape[1])
    arm_circumference = height_ratio * math.pi * abs(wrist.x * image.shape[1] - shoulder.x * image.shape[1])
    chest_circumference = 2 * height_ratio * math.pi * (hip.y * image.shape[0] - shoulder.y * image.shape[0])
    waist_circumference = 2 * height_ratio * math.pi * (hip.y * image.shape[0] - wrist.y * image.shape[0])

    # Hiển thị số đo ba vòng
    cv2.putText(image, f"Shoulder Width: {shoulder_width:.2f} cm", (10, 30), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 0), 2)
    cv2.putText(image, f"Arm Circumference: {arm_circumference:.2f} cm", (10, 60), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 0), 2)
    cv2.putText(image, f"Chest Circumference: {chest_circumference:.2f} cm", (10, 90), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 0), 2)
    cv2.putText(image, f"Waist Circumference: {waist_circumference:.2f} cm", (10, 120), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 0), 2)

    # Vẽ các điểm mốc trên cơ thể
    mp_drawing.draw_landmarks(image, results.pose_landmarks, mp_pose.POSE_CONNECTIONS)

# Hiển thị ảnh với số đo ba vòng
cv2.imshow('Body Measurements', image)
cv2.waitKey(0)
cv2.destroyAllWindows()
