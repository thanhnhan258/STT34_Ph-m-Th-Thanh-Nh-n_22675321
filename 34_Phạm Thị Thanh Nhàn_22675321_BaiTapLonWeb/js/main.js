function login() {
    const inputUsername = document.querySelector(".input-login-username");
    const inputPassword = document.querySelector(".input-login-password");

    if (inputUsername.value === "" || inputPassword.value === "") {
        alert("vui lòng không để trống");
      } else {
        const user = JSON.parse(localStorage.getItem(inputUsername.value));
        if (
          user.username === inputUsername.value &&
          user.password === inputPassword.value
        ) {
          alert("Đăng Nhập Thành Công");

          window.location.href = "../index.html";
        } else {
          alert("Đăng Nhập Thất Bại");
        }
      }
}


