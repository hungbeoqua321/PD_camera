import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
import joblib

# Đọc dữ liệu từ tệp CSV
data = pd.read_csv('data\dataTest.csv')[:300]

# Chia dữ liệu thành tập huấn luyện và tập kiểm tra
X = data[['TotalHeight']]
y = data.drop(['TotalHeight'], axis=1)

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Tạo và huấn luyện mô hình hồi quy tuyến tính
model = LinearRegression()
model.fit(X_train, y_train)

# Dự đoán số đo còn lại dựa vào chiều cao
joblib.dump(model, 'trained_data.pkl')