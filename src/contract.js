// import web3 from './connect.js';
// const contractData = require('./abi/DegreeCertification.json');
// import DegreeCertification from './abi/DegreeCertification.json' assert { type: 'json' };

//////////////////////////////////
// Địa chỉ hợp đồng đã triển khai
// let contractAddress="";
// ABI của hợp đồng
// let contractABI=[];
//////////////////////////////////


// Tạo đối tượng hợp đồng
const contract = new web3.eth.Contract(contractABI, contractAddress);

// Hàm phát hành chứng chỉ
async function issueCertificate(certHash, idNumber, studentID, name, degree, institution, dateIssued, numberSign, referenceNumber) {
  try{
  const accounts = await web3.eth.getAccounts();
  // const account = await web3.eth.accounts.privateKeyToAccount(privateKey);

  const result = await contract.methods.issueCertificate(certHash, idNumber, studentID, name, degree, institution, dateIssued, numberSign, referenceNumber).send({ from: accounts[0], gas: 300000 })
  Swal.fire({
    title: "Thông báo",
    text: "Phát hành VB thành công." + certHash,
    icon: "success"
  });

  }catch(error)
  {
    Swal.fire({
      title: "Lỗi",
      text: "Có lỗi nào đó đã sảy ra. \nVui lòng kiểm tra lại!",
      icon: "error"
    });
  }
};

// Hàm thu hồi chứng chỉ 0xf9a21abec8282c9fefc9aad8d10504e450ef2424bfb93ef9b4e034852a57e83d
async function revokeCertificate(certHash) {
  try{
  const accounts = await web3.eth.getAccounts();
  // const account = await web3.eth.accounts.privateKeyToAccount(privateKey);

  await contract.methods.revokeCertificate(certHash).send({ from: accounts[0] });
    Swal.fire({
      title: "Thông báo",
      text: "Thu hồi thành công." + certHash,
      icon: "success"
    });
  }catch(error)
  {
    Swal.fire({
      title: "Lỗi",
      text: "Mã băm không tồn tại. \nVui lòng kiểm tra lại!",
      icon: "error"
    });
  }

};

// Hàm xác minh chứng chỉ
async function verifyCertificate(certHash) {
  try{
    result = await contract.methods.verifyCertificate(certHash).call()
      document.getElementById("id_ma_sinh_vien").value = result[1];
      document.getElementById("id_cccd").value = result[0];
      document.getElementById("id_ho_ten").value = result[2];
      document.getElementById("id_ngay_cap").value = result[5];
      document.getElementById("id_so_hieu").value = result[6];;
      document.getElementById("id_so_vao_so").value = result[7];
      document.getElementById("id_nganh_hoc").value = result[3];

      Swal.fire({
        title: "Thông báo",
        text: "Hoàn tất tìm kiếm.",
        icon: "success"
      })
  }catch(error){
    Swal.fire({
      title: "Lỗi",
      text: "Mã băm không đúng \nVui lòng kiểm tra lại!",
      icon: "error"
    });
  }
};

// Xử lys các sự kiện:
var submitTraCuu = document.getElementById("btn_tra_cuu");
var submitCapNhat = document.getElementById("btn_cap_nhat");
var submitThemMoi = document.getElementById("btn_them_moi");
var submitReset = document.getElementById("btn_reset");

var txtMaSV = document.getElementById("id_ma_sinh_vien");
var txtCCCD = document.getElementById("id_cccd");
var txtHoTen = document.getElementById("id_ho_ten");
var txtNgayCap = document.getElementById("id_ngay_cap");
var txtSoHieu = document.getElementById("id_so_hieu");
var txtSoVaoSo = document.getElementById("id_so_vao_so");
var txtNganhHoc = document.getElementById("id_nganh_hoc");

function XuLy_TraCuu(event) {
  event.preventDefault();
  temp_id_certHash = document.getElementById("id_certHash").value.trim();
  
  if(temp_id_certHash.length == 0 ){ 
    Swal.fire({
      title: "Thông báo",
      text: "Vui lòng nhập certHash cần xác minh?",
      icon: "error"
    });
    return;
  }
  const id_certHash = web3.utils.padLeft(temp_id_certHash,64);
  verifyCertificate(id_certHash);
};

function XuLy_ThemMoi(event) {	
	event.preventDefault(); // Ngăn chặn gửi form
	var id_ma_sinh_vien = document.getElementById("id_ma_sinh_vien").value.trim();
  var id_cccd = document.getElementById("id_cccd").value.trim();
  var id_ho_ten = document.getElementById("id_ho_ten").value.trim();
  var id_nganh_hoc = document.getElementById("id_nganh_hoc").value.trim();
  var id_so_hieu = document.getElementById("id_so_hieu").value.trim();
  var id_so_vao_so = document.getElementById("id_so_vao_so").value.trim();
  var id_ngay_cap = document.getElementById("id_ngay_cap").value.trim();
  var ma_truong = "ukh";
  var myCertHash = CertHash(id_cccd, id_ma_sinh_vien, id_ho_ten, id_nganh_hoc, ma_truong, id_ngay_cap, id_so_hieu, id_so_vao_so);

  // var tm = id_ma_sinh_vien + id_cccd + id_ho_ten + id_nganh_hoc + id_so_hieu + id_so_vao_so + id_so_vao_so + id_ngay_cap
  if(myCertHash ==0 || id_ma_sinh_vien.length == 0 || id_cccd.length == 0 || id_ho_ten.length == 0 || id_nganh_hoc.length == 0 || id_so_hieu.length == 0 || id_so_vao_so.length == 0 || id_so_vao_so.length == 0 || id_ngay_cap.length == 0){ 
    Swal.fire({
      title: "Thông báo",
      text: "Vui lòng nhập hết tất cả các trường?",
      icon: "error"
    });
    return;
  }
  
  Swal.fire({
    title: "Thông báo",
    text: "Bạn có muốn phát hành VB này",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Có, Hãy thực hiện!"
  }).then((result) => {
    if (result.isConfirmed) {
      // var certHash = web3.utils.hexToUtf8(issueCertificate(id_cccd, id_ma_sinh_vien, id_ho_ten, id_nganh_hoc, ma_truong, id_ngay_cap, id_so_hieu, id_so_vao_so));
      issueCertificate(myCertHash, id_cccd, id_ma_sinh_vien, id_ho_ten, id_nganh_hoc, ma_truong, id_ngay_cap, id_so_hieu, id_so_vao_so)
      //   document.getElementById("id_certHash").value = certHash
       document.getElementById("id_certHash").value = myCertHash;
    }
    
  });

};
//0xf2df539726b187c7e19cc4ac88fc3a856974ffaad0897e0a64725a8d470e7e4a
function XuLy_CapNhat(event) {	
	event.preventDefault(); // Ngăn chặn gửi form
  var id_certHash = document.getElementById("id_certHash").value.trim();
  Swal.fire({
    title: "Thông báo",
    text: "Bạn có chắc chắn thu hồi chứng chỉ này. Nếu thu hồi không thể khôi phục lại được.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Có, Hãy thu hồi!"
  }).then((result) => {
    if (result.isConfirmed) {
      if(id_certHash.length == 0 ){ 
        Swal.fire({
          title: "Thông báo",
          text: "Vui lòng nhập certHash cần thu hồi?",
          icon: "error"
        });
        return;
      }
      revokeCertificate(id_certHash);
    }
  });
};

function XuLy_Reset(event) {	
	event.preventDefault(); // Ngăn chặn gửi form
	window.location.href = "/tracuu";
};


function CreateCertHash(event) {
  event.preventDefault();
  var id_cccd = document.getElementById("id_cccd").value.trim();
  var id_ma_sinh_vien = document.getElementById("id_ma_sinh_vien").value.trim();
  var id_ho_ten = document.getElementById("id_ho_ten").value.trim();
  var id_nganh_hoc = document.getElementById("id_nganh_hoc").value.trim();
  var ma_truong = "ukh";
  var id_ngay_cap = document.getElementById("id_ngay_cap").value.trim();
  var id_so_hieu = document.getElementById("id_so_hieu").value.trim();
  var id_so_vao_so = document.getElementById("id_so_vao_so").value.trim();
  document.getElementById("id_certHash").value = CertHash(id_cccd, id_ma_sinh_vien, id_ho_ten, id_nganh_hoc, ma_truong, id_ngay_cap, id_so_hieu, id_so_vao_so);
};


//click
submitTraCuu.addEventListener("click", XuLy_TraCuu);
submitThemMoi.addEventListener("click", XuLy_ThemMoi);
submitCapNhat.addEventListener("click", XuLy_CapNhat);
submitReset.addEventListener("click", XuLy_Reset);

//change
txtMaSV.addEventListener("input", CreateCertHash);
txtCCCD.addEventListener("input", CreateCertHash);
txtHoTen.addEventListener("input", CreateCertHash);
txtNgayCap.addEventListener("input", CreateCertHash);
txtSoHieu.addEventListener("input", CreateCertHash);
txtSoVaoSo.addEventListener("input", CreateCertHash);
txtNganhHoc.addEventListener("input", CreateCertHash);
