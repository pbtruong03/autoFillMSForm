# autofillform
Tiện ích Chrome giúp bạn điền các câu hỏi nhanh hơn
## Features
- Tự động điền các câu trả lời theo dữ liệu trong file JSON
## Installation
1. Tải file .zip của kho lưu trữ về máy tính.
![image](https://github.com/pbtruong03/autoFillMSForm/assets/134211545/bffd4ff1-5837-403a-bf57-32f45ae48dcb)
2. Giải nén file .zip sẽ được thư mục chứa các file như sau:
![image](https://github.com/pbtruong03/autoFillMSForm/assets/134211545/2bccd4ca-9ec9-4b51-a476-99e9f9f0c98d)
3. Vào mục tiện ích mở rộng ở trong Chrome

![image](https://github.com/pbtruong03/autoFillMSForm/assets/134211545/69046ce0-4977-452d-b735-7319ba27fcd0)

4. Bật chế độ nhà phát triển và tải lên "tiện ích đã giải nén"

![image](https://github.com/pbtruong03/autoFillMSForm/assets/134211545/140e181e-141d-436b-9857-b8d501d13ebf)
![image](https://github.com/pbtruong03/autoFillMSForm/assets/134211545/130ad8c4-c21d-4c58-9b34-f8616edfa143)

5. Chọn thư mục chứa các file như ở bước 2

![image](https://github.com/pbtruong03/autoFillMSForm/assets/134211545/e588731c-183e-468c-abf1-3a843a6095da)

Bây giờ tiện ích này đã được cài đặt trong Chrome
![image](https://github.com/pbtruong03/autoFillMSForm/assets/134211545/c85c9931-bf3d-407e-8f35-79f9235a2c00)

## Usage
1. Mở Microsoft Form mà bạn cần điền
2. Mở tiện ích này lên

![image](https://github.com/pbtruong03/autoFillMSForm/assets/134211545/0e01061c-0303-48f3-a569-f32c96c5ecd8)

3.Bây giờ, bạn sẽ tải lên file dữ liệu của form

![image](https://github.com/pbtruong03/autoFillMSForm/assets/134211545/bf3ed142-21f0-4a44-b563-e60494bb811c)

Trong folder data của file .zip đã giải nén sẽ có data của bài kiểm tra quy chế và bài tìm hiểu pháp luật.
Hãy tải lên file phù hợp với form bạn đang làm

![image](https://github.com/pbtruong03/autoFillMSForm/assets/134211545/0ec1dbb8-e2f3-4661-9cee-83cfc47cf23e)

4. Nhấn nút phía dưới và form đã được điền.

## JSON file format

Nếu bạn cần tạo một dữ liệu cho form khác hãy tạo file có đuôi .json theo cấu trúc sau:
```json
{
  "Nội dung câu hỏi 1":"Nội dung câu trả lời 1",
  "Nội dung câu hỏi 2":"Nội dung câu trả lời 2",

}
