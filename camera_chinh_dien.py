import cv2
import mediapipe as mp
import math
import pickle
import numpy as np

# Khởi tạo đối tượng Mediapipe Pose
mp_pose = mp.solutions.pose
pose = mp_pose.Pose(min_detection_confidence=0.3, min_tracking_confidence=0.3)

# Khởi tạo đối tượng Mediapipe Drawing
mp_drawing = mp.solutions.drawing_utils

# Danh sách để lưu dữ liệu
data = []

height = float(input("Nhập chiều cao của người (cm): "))

# Bắt đầu quá trình huấn luyện
while True:
    # Khởi tạo camera
    cap = cv2.VideoCapture(0)

    # Chờ vài giây để camera khởi động
    cv2.waitKey(2000)

    # Đọc khung hình từ camera
    ret, image = cap.read()

    # Chuyển đổi ảnh thành ảnh màu RGB
    image_rgb = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)

    # Nhận dạng các điểm mốc trên cơ thể
    results = pose.process(image_rgb)

    if results.pose_landmarks:
        landmarks = results.pose_landmarks.landmark

        # Lấy các điểm mốc cần thiết
        shoulder = landmarks[mp_pose.PoseLandmark.LEFT_SHOULDER]
        hip = landmarks[mp_pose.PoseLandmark.LEFT_HIP]
        wrist = landmarks[mp_pose.PoseLandmark.LEFT_WRIST]

        # Tính toán chiều cao pixels
        shoulder_x, shoulder_y = int(shoulder.x * image.shape[1]), int(shoulder.y * image.shape[0])
        hip_x, hip_y = int(hip.x * image.shape[1]), int(hip.y * image.shape[0])
        height_pixels = max(math.sqrt((hip_x - shoulder_x) ** 2 + (hip_y - shoulder_y) ** 2), 1)

        # Tính toán tỷ lệ giữa chiều cao thực tế và chiều cao pixels để áp dụng vào đo đạc
        height_ratio = height / height_pixels

        # Tính toán các số đo cơ thể và lưu vào danh sách
        shoulder_width = height_ratio * abs(shoulder.x * image.shape[1] - hip.x * image.shape[1])
        arm_length = height_ratio * abs(wrist.x * image.shape[1] - shoulder.x * image.shape[1])

        data_point = [shoulder_width, arm_length]  # Thêm các số đo khác vào danh sách ở đây

        data.append(data_point)

        # Hiển thị các chỉ số cơ thể
        cv2.putText(image, f"Shoulder Width: {shoulder_width:.2f} cm", (10, 30), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 0), 2)
        cv2.putText(image, f"Arm Length: {arm_length:.2f} cm", (10, 60), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 0), 2)

    # Vẽ các điểm mốc trên cơ thể
    mp_drawing.draw_landmarks(image, results.pose_landmarks, mp_pose.POSE_CONNECTIONS)

    # Hiển thị ảnh với các chỉ số cơ thể
    cv2.imshow('Body Measurements', image)

    # Nhấn 'q' để kết thúc việc ghi dữ liệu
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

# Đóng camera
cap.release()
cv2.destroyAllWindows()

# Chuyển danh sách thành mảng NumPy
data = np.array(data)

# Lưu dữ liệu đã thu thập vào một tệp pickle
with open('trained_data.pkl', 'wb') as file:
    pickle.dump(data, file)
