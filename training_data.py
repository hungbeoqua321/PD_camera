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

# Lấy mô hình đã huấn luyện từ trained_data.pkl nếu nó đã tồn tại
try:
    trained_model = joblib.load('trained_data.pkl')
    # Gộp dữ liệu cũ và dữ liệu mới
    X_train = pd.concat([X_train, X_train])
    y_train = pd.concat([y_train, y_train])
    
    # Huấn luyện lại mô hình từ đầu
    trained_model.fit(X_train, y_train)
except FileNotFoundError:
    # Nếu trained_data.pkl chưa tồn tại, sử dụng mô hình mới
    trained_model = model

# Ghi mô hình đã huấn luyện vào trained_data.pkl
joblib.dump(trained_model, 'trained_data.pkl')
