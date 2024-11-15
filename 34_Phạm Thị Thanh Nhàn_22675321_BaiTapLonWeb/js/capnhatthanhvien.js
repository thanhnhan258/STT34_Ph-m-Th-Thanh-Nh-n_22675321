function updateMemberList() {
    const inputName = document.querySelector(".input-signup-name").value;
    const inputEmail = document.querySelector(".input-signup-email").value;
    const inputPhone = document.querySelector(".input-signup-phone").value;
    const inputAddress = document.querySelector(".input-signup-address").value;
  
    const memberTableBody = document.querySelector(".table tbody");
  
    // Tạo một hàng mới trong bảng
    const newRow = document.createElement("tr");
  
    // Tạo các ô trong hàng mới
    const sttCell = document.createElement("td");
    const nameCell = document.createElement("td");
    const emailCell = document.createElement("td");
    const phoneCell = document.createElement("td");
    const addressCell = document.createElement("td");
  
    // Lấy số thứ tự của hàng cuối cùng trong bảng
    const lastRowIndex = memberTableBody.rows.length - 1;
    const lastRow = memberTableBody.rows[lastRowIndex];
    const lastStt = parseInt(lastRow.cells[0].textContent);
  
    // Tăng số thứ tự lên 1 và gán cho ô STT
    const newStt = lastStt + 1;
    sttCell.textContent = newStt;
  
    // Gán thông tin người dùng cho các ô
    nameCell.textContent = inputName;
    emailCell.textContent = inputEmail;
    phoneCell.textContent = inputPhone;
    addressCell.textContent = inputAddress;
  
    // Thêm các ô vào hàng mới
    newRow.appendChild(sttCell);
    newRow.appendChild(nameCell);
    newRow.appendChild(emailCell);
    newRow.appendChild(phoneCell);
    newRow.appendChild(addressCell);
  
    // Thêm hàng mới vào bảng
    memberTableBody.appendChild(newRow);
  }