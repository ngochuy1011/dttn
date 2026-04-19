// Xử lys các sự kiện:
var submitTraCuu = document.getElementById("btn_tra_cuu");
var submitCapNhat = document.getElementById("btn_cap_nhat");
var submitThemMoi = document.getElementById("btn_them_moi");
var submitReset = document.getElementById("btn_reset");
function XuLy_TraCuu(event) {
  event.preventDefault();
  alert("Form nhan tra cuu!");
  // Bạn có thể thực hiện các thao tác khác tại đây
};

function XuLy_Reset(event) {	
	event.preventDefault(); // Ngăn chặn gửi form
	window.location.href = "/tracuu";
};

submitTraCuu.addEventListener("click", XuLy_TraCuu);
// submitThemMoi.addEventListener("click", XuLy_ThemMoi);
// submitCapNhat.addEventListener("click", XuLy_CapNhat);
submitReset.addEventListener("click", XuLy_Reset);
