import { ChangeEvent } from "react";

function ValidateImg() {
  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const eTarget = event.target;
    if (eTarget.files && eTarget.files.length > 0) {
      const imageFile = eTarget.files[0];
      // Kiểm tra dung lượng của hình ảnh (đơn vị là bytes)
      console.log({ imageFile });
      if (imageFile.size > 5 * 1024 * 1024) {
        // 1024 * 1024 là 1MB => 5 MB = 5 * 1024 * 1024
        alert("Hình ảnh quá lớn, vui lòng chọn hình ảnh nhỏ hơn 1MB.");
        return;
      } else {
        alert((imageFile.size / 1024 / 1024).toFixed(2) + " MB");
      }

      // Tiếp tục xử lý hình ảnh ở đây nếu hợp lệ
    } else {
      alert("Vui lòng chọn một hình ảnh.");
    }
  };
  return <input type="file" name="img" onChange={handleImageUpload} />;
}

export default ValidateImg;
