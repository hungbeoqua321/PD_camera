import joblib
import pandas as pd
from sklearn.metrics import mean_absolute_error

# Đọc dữ liệu kiểm tra từ tệp CSV
data = pd.read_csv('data\dataTest.csv')[300:]

# Tải mô hình đã huấn luyện
trained_model = joblib.load('trained_data.pkl')

# Chia dữ liệu thành đầu vào và đầu ra
X_test = data[['TotalHeight']]
y_test = data.drop(['TotalHeight'], axis=1)

# Dự đoán với mô hình đã huấn luyện
y_pred = trained_model.predict(X_test)

# Tính độ chính xác
mae = mean_absolute_error(y_test, y_pred)

# Chuyển đổi MAE thành độ chính xác theo phần trăm
accuracy_percentage = 100 - (mae / y_test.mean() * 100)
print("Accuracy (%):")
print(accuracy_percentage)
