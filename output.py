import joblib

# Đọc mô hình từ tệp
model = joblib.load('trained_data.pkl')

# Nhập chiều cao từ console
total_height = float(input("Nhập chiều cao: "))

# Dự đoán các số đo còn lại
predicted_measurements = model.predict([[total_height]])

# Định nghĩa tên cho các tham số
measurement_names = ["ShoulderWidth", "ChestWidth", "Belly", "Waist", "Hips", "ArmLength", "ShoulderToWaist", "WaistToKnee", "LegLength"]

# In kết quả dự đoán theo tên của các tham số
print("Kết quả dự đoán:")
for i in range(len(measurement_names)):
    print(f"{measurement_names[i]}: {predicted_measurements[0][i]}")
