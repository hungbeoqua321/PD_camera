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

    # Điểm mốc ở vai và mông
    shoulder = landmarks[mp_pose.PoseLandmark.LEFT_SHOULDER]
    hip = landmarks[mp_pose.PoseLandmark.LEFT_HIP]

    # Tính toán chiều cao bằng cách tính khoảng cách từ đầu đến mông
    shoulder_x, shoulder_y = int(shoulder.x * image.shape[1]), int(shoulder.y * image.shape[0])
    hip_x, hip_y = int(hip.x * image.shape[1]), int(hip.y * image.shape[0])
    height_pixels = max(math.sqrt((hip_x - shoulder_x) ** 2 + (hip_y - shoulder_y) ** 2), 1)

    # Tính toán tỷ lệ giữa chiều cao thực tế và chiều cao pixels để áp dụng vào đo đạc
    height_ratio = height / height_pixels

    # Tính toán chiều rộng của vai và chiều dài của cánh tay dựa trên chiều cao tỷ lệ
    shoulder_width = height_ratio * abs(shoulder.x * image.shape[1] - hip.x * image.shape[1])
    arm_length = height_ratio * abs(landmarks[mp_pose.PoseLandmark.LEFT_WRIST].x * image.shape[1] - shoulder.x * image.shape[1])

    # Hiển thị các chỉ số cơ thể
    cv2.putText(image, f"Shoulder Width: {shoulder_width:.2f} cm", (10, 30), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 0), 2)
    cv2.putText(image, f"Arm Length: {arm_length:.2f} cm", (10, 60), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 0), 2)

    # Vẽ các điểm mốc trên cơ thể
    mp_drawing.draw_landmarks(image, results.pose_landmarks, mp_pose.POSE_CONNECTIONS)

# Hiển thị ảnh với các chỉ số cơ thể
cv2.imshow('Body Measurements', image)
cv2.waitKey(0)
cv2.destroyAllWindows()
