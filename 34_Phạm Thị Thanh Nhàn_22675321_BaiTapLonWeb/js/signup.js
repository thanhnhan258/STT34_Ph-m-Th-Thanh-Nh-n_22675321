function signup() {
  const inputUsernameRegister = document.querySelector(".input-signup-username");
  const inputPasswordRegister = document.querySelector(".input-signup-password");
  const inputAddress = document.querySelector(".input-signup-address");
  const inputPhone = document.querySelector(".input-signup-phone");
  const inputEmail = document.querySelector(".input-signup-email");
  const inputName = document.querySelector(".input-signup-name");
  const errorSpan = document.getElementById("tbUser");

  if (
    inputUsernameRegister.value === "" ||
    inputPasswordRegister.value === "" ||
    inputAddress.value === "" ||
    inputName.value === "" ||
    inputPhone.value === "" ||
    inputEmail.value === ""
  ) {
    alert("Vui lòng không để trống");
  } else {
    const user = {
      username: inputUsernameRegister.value,
      password: inputPasswordRegister.value,
      address: inputAddress.value,
      phone: inputPhone.value,
      email: inputEmail.value,
      name: inputName.value,
    };
    let json = JSON.stringify(user);
    localStorage.setItem(inputUsernameRegister.value, json);
    alert("Đăng Ký Thành Công");
    // lưu xuống bảng thành viên
    updateMemberList();
    window.location.href = "../html/thanhvien.html";
  }
}