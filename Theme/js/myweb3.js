/*
Name: 			My web 3
Written by: 	Dao Ngoc Huy - (http://itcode.vn)
*/

//var Web3 = require('web3');
const web3 = new Web3('http://127.0.0.1:7545'); // Thay thế URL bằng nút Ethereum hoặc Infura của bạn
const contractAddress = '0xEcca79616b29D5BF4b6c2360A0B5553f26Bf46Eb'; // Địa chỉ của hợp đồng 
const userAddress = '0x91610aEFD5EDCb686Bcb397607aB253A825DF7E0'; //địa chỉ người tạo hợp đồng
const privateKey = '0x610b94ae53a93cd421aa9d9085f08c450b4c59dbc3d862e7e375257a8ccad53a';//khóa riêng tư của người tạo hợp đồng
//var userAddress = '0xf92154c2725de86773694C854DDEf7cF2171f9ED'; //địa chỉ người tạo hợp đồng
//var privateKey = '0xf23e462f9639dd8a76d3f694dc07678b5666f7f15506b5668fa987cbc462fdca';//khóa riêng tư của người tạo hợp đồng
const contractABI = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "_holder",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "_cccd",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "_hoTen",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "_nganhHoc",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "_soHieuVB",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "_soVaoSo",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "_ngayCap",
				"type": "string"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "_donVi",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "_exists",
				"type": "bool"
			}
		],
		"name": "DiplomaIssued",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "_holder",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "_cccd",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "_hoTen",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "_nganhHoc",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "_soHieuVB",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "_soVaoSo",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "_ngayCap",
				"type": "string"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "_donVi",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "_exists",
				"type": "bool"
			}
		],
		"name": "updateIssued",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "diplomas",
		"outputs": [
			{
				"internalType": "string",
				"name": "cccd",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "hoTen",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "nganhHoc",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "soHieuVB",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "soVaoSo",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ngayCap",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "donVi",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "exists",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_holder",
				"type": "address"
			}
		],
		"name": "getDiplomasForHolder",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getUserLogin",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_holder",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "_cccd",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_hoTen",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_nganhHoc",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_soHieuVB",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_soVaoSo",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_ngayCap",
				"type": "string"
			}
		],
		"name": "issueDiploma",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_holder",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "_cccd",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_hoTen",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_nganhHoc",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_soHieuVB",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_soVaoSo",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_ngayCap",
				"type": "string"
			}
		],
		"name": "updateDiploma",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_holder",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "_cccd",
				"type": "string"
			}
		],
		"name": "verifyDiploma",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_holder",
				"type": "address"
			}
		],
		"name": "xacThuc",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]; // ABI của hợp đồng

const myContract = new web3.eth.Contract(contractABI, contractAddress);
var submitTraCuu = document.getElementById("btn_tra_cuu");
var submitCapNhat = document.getElementById("btn_cap_nhat");
var submitThemMoi = document.getElementById("btn_them_moi");
var submitReset = document.getElementById("btn_reset");

function XuLy_Reset(event) {	
	event.preventDefault(); // Ngăn chặn gửi form
	window.location.href = "/tracuu";
}
/*
async function XacMinh() {	
	//const contractAddress = '0x620E730374dbe5AC041EbA67B2834d3780E46BCe'; // Địa chỉ của hợp đồng 
	//const userAddress = '0xf92154c2725de86773694C854DDEf7cF2171f9ED'; //địa chỉ người tạo hợp đồng
	//const privateKey = '0xf23e462f9639dd8a76d3f694dc07678b5666f7f15506b5668fa987cbc462fdca';//khóa riêng tư của người tạo hợp đồng
	if(userAddress.length=0)
	{
		const { value: user_id } = await Swal.fire({
			title: "Nhập ID",
			input: "text",
			inputLabel: "User ID của bạn (User address)",
			inputPlaceholder: "ID",
			inputAttributes: {
			  maxlength: "100",
			  autocapitalize: "off",
			  autocorrect: "off"
			}
		  });
		  //if (password) {
			//Swal.fire(`Entered password: ${password}`);
		  //}
		  if(web3.utils.isAddress(user_id)) 
		  {
			userAddress= user_id;
		  }else
		  {
			userAddress="";
			Swal.fire({
				title: "LỖI!",
				text: "Vui lòng kiểm tra lại ID!",
				icon: "error"
			  });
	  		return;
		  }
		  //nhập khoá bảo mật
		  if(privateKey.length=0){
			const { value: key_private } = await Swal.fire({
				title: "Khoá cá nhân",
				input: "password",
				inputLabel: "Bạn hãy nhập Khoá cá nhân của bạn \n(Lưu ý: Không cung cấp khoá cá nhân cho bất kỳ ai)",
				inputPlaceholder: "Khoá cá nhân của bạn",
				inputAttributes: {
				  maxlength: "100",
				  autocapitalize: "off",
				  autocorrect: "off"
				}
			  });
			  if(web3.utils.isAddress(key_private)) 
			  {
				key_private = user_id;
			  }else
			  {
				privateKey ="";
				Swal.fire({
					title: "LỖI!",
					text: "Vui lòng kiểm tra lại khoá cá nhân!",
					icon: "error"
				  });
				  return;
			  }
		}
	}

	
	
}
*/
//document.getElementById("frm_tracuu").addEventListener("submit", function(event) {
function XuLy_TraCuu(event) {	
  event.preventDefault(); // Ngăn chặn gửi form

  var id_ma_sinh_vien = document.getElementById("id_ma_sinh_vien").value;
  console.log("id_ma_sinh_vien: " + id_ma_sinh_vien);

	if(!web3.utils.isAddress(id_ma_sinh_vien)) 
	{
		document.getElementById("id_cccd").value="";
		document.getElementById("id_ho_ten").value="";
		document.getElementById("id_nganh_hoc").value="";
		document.getElementById("id_so_hieu").value="";
		document.getElementById("id_so_vao_so").value="";
		document.getElementById("id_ngay_cap").value="";
		document.getElementById("lb_thong_bao").innerHTML="Vui lòng kiểm tra lại ID";
		Swal.fire({
  				title: "LỖI!",
  				text: "Vui lòng kiểm tra lại ID!",
  				icon: "error"
				});
		return;
	}

  // Gửi dữ liệu đến server blockchain
	//const myContract = new web3.eth.Contract(contractABI, contractAddress);
	var jsonObj=""
	myContract.methods.getDiplomasForHolder(id_ma_sinh_vien).call((error, result) => {
		if (!error) {
			console.log('Tim thay:', result);
			jsonObj = JSON.parse(result);

			document.getElementById("id_cccd").value=jsonObj.cccd;
			document.getElementById("id_ho_ten").value=jsonObj.hoTen;
			document.getElementById("id_nganh_hoc").value=jsonObj.nganhHoc;
			document.getElementById("id_so_hieu").value=jsonObj.soHieuVB;
			document.getElementById("id_so_vao_so").value=jsonObj.soVaoSo;
			document.getElementById("id_ngay_cap").value=jsonObj.ngayCap;
			if(jsonObj.soHieuVB.length>0)
				document.getElementById("lb_thong_bao").innerHTML="Lấy thông tin sinh viên thành công";
			else{
				Swal.fire({
  				title: "LỖI!",
  				text: "Không tìm thấy sinh viên này!",
  				icon: "error"
				});
				document.getElementById("lb_thong_bao").innerHTML="Không tìm thấy sinh viên này";
			}
		} else {
			console.error('Loi:', error);
			document.getElementById("id_cccd").value="";
			document.getElementById("id_ho_ten").value="";
			document.getElementById("id_nganh_hoc").value="";
			document.getElementById("id_so_hieu").value="";
			document.getElementById("id_so_vao_so").value="";
			document.getElementById("id_ngay_cap").value="";
			Swal.fire({
  				title: "LỖI!",
  				text: "Cần nhập đầy đủ ID để tra cứu.!",
  				icon: "error"
				});
			document.getElementById("lb_thong_bao").innerHTML="Cần nhập đầy đủ ID để tra cứu.";
		}
	});
};

function XuLy_ThemMoi(event) {
	event.preventDefault();
	var id_ma_sinh_vien = document.getElementById("id_ma_sinh_vien").value;
	if(!web3.utils.isAddress(id_ma_sinh_vien)) 
	{
		document.getElementById("lb_thong_bao").innerHTML="Vui lòng kiểm tra lại ID";
		return;
	}

	myContract.methods.xacThuc(id_ma_sinh_vien).call((error, result) => {
		if (!error) {
			if(!Boolean(result))
			{
				Swal.fire({
  					title: "Bạn có chắc chắn điều này?",
  					text: "Cấp mới văn bằng này!",
  					icon: "warning",
  					showCancelButton: true,
  					confirmButtonColor: "#3085d6",
  					cancelButtonColor: "#d33",
  					confirmButtonText: "Chắc chắn"
				}).then((result) => {
  					if (result.isConfirmed) {
    						var id_cccd = document.getElementById("id_cccd").value;
						var id_ho_ten = document.getElementById("id_ho_ten").value;
						var id_nganh_hoc = document.getElementById("id_nganh_hoc").value;
						var id_so_hieu = document.getElementById("id_so_hieu").value;
						var id_so_vao_so = document.getElementById("id_so_vao_so").value;
						var id_ngay_cap = document.getElementById("id_ngay_cap").value;
						addContractValue(id_ma_sinh_vien, id_cccd, id_ho_ten, id_nganh_hoc, id_so_hieu, id_so_vao_so, id_ngay_cap);

						Swal.fire({
      						title: "Thành công!",
      						text: "Văn bằng đã được thêm vào.",
      						icon: "success"
    						});
 					}
				});

				document.getElementById("lb_thong_bao").innerHTML="Đã thêm thành công";
			}else
			{
				document.getElementById("lb_thong_bao").innerHTML="Sinh viên này đã được cấp văn bằng rồi";
			}
		} else {
			document.getElementById("lb_thong_bao").innerHTML="Lỗi trong quá trình thêm dữ liệu";
		}
	});
}


async function updateContractValue(id_ma_sinh_vien, id_cccd, id_ho_ten, id_nganh_hoc, id_so_hieu, id_so_vao_so, id_ngay_cap) {

	const data = myContract.methods.updateDiploma(id_ma_sinh_vien, id_cccd, id_ho_ten, id_nganh_hoc, id_so_hieu, id_so_vao_so, id_ngay_cap).encodeABI();

    // Tạo một giao dịch
    const gas = await web3.eth.estimateGas({
        from: userAddress,
        to: contractAddress,
        data
    });

    const transaction = {
        from: userAddress,
        to: contractAddress,
        gas,
        data
    };

    // Ký giao dịch bằng khóa riêng tư
    const signedTransaction = await web3.eth.accounts.signTransaction(transaction, privateKey);

    // Gửi giao dịch lên mạng Ethereum
    const receipt = await web3.eth.sendSignedTransaction(signedTransaction.rawTransaction);

    console.log('Transaction receipt:', receipt);
}

async function addContractValue(id_ma_sinh_vien, id_cccd, id_ho_ten, id_nganh_hoc, id_so_hieu, id_so_vao_so, id_ngay_cap) {

	const data = myContract.methods.issueDiploma(id_ma_sinh_vien, id_cccd, id_ho_ten, id_nganh_hoc, id_so_hieu, id_so_vao_so, id_ngay_cap).encodeABI();

    // Tạo một giao dịch
    const gas = await web3.eth.estimateGas({
        from: userAddress,
        to: contractAddress,
        data
    });

    const transaction = {
        from: userAddress,
        to: contractAddress,
        gas,
        data
    };

    // Ký giao dịch bằng khóa riêng tư
    const signedTransaction = await web3.eth.accounts.signTransaction(transaction, privateKey);

    // Gửi giao dịch lên mạng Ethereum
    const receipt = await web3.eth.sendSignedTransaction(signedTransaction.rawTransaction);

    console.log('Transaction receipt:', receipt);
}

function XuLy_CapNhat(event) {
	 event.preventDefault();
	 var id_ma_sinh_vien = document.getElementById("id_ma_sinh_vien").value;
	if(!web3.utils.isAddress(id_ma_sinh_vien)) 
	{
		document.getElementById("lb_thong_bao").innerHTML="Vui lòng kiểm tra lại ID";
		return;
	}

	myContract.methods.xacThuc(id_ma_sinh_vien).call((error, result) => {
		if (!error) {
			if(Boolean(result))
			{
				var id_cccd = document.getElementById("id_cccd").value;
				var id_ho_ten = document.getElementById("id_ho_ten").value;
				var id_nganh_hoc = document.getElementById("id_nganh_hoc").value;
				var id_so_hieu = document.getElementById("id_so_hieu").value;
				var id_so_vao_so = document.getElementById("id_so_vao_so").value;
				var id_ngay_cap = document.getElementById("id_ngay_cap").value;
				updateContractValue(id_ma_sinh_vien, id_cccd, id_ho_ten, id_nganh_hoc, id_so_hieu, id_so_vao_so, id_ngay_cap);


				Swal.fire({
					title: "Bạn có chắc chắn điều này?",
					text: "Cập nhật lại văn bằng này!",
					icon: "warning",
					showCancelButton: true,
					confirmButtonColor: "#3085d6",
					cancelButtonColor: "#d33",
					confirmButtonText: "Chắc chắn"
			  }).then((result) => {
					if (result.isConfirmed) {
						var id_cccd = document.getElementById("id_cccd").value;
						var id_ho_ten = document.getElementById("id_ho_ten").value;
						var id_nganh_hoc = document.getElementById("id_nganh_hoc").value;
						var id_so_hieu = document.getElementById("id_so_hieu").value;
						var id_so_vao_so = document.getElementById("id_so_vao_so").value;
						var id_ngay_cap = document.getElementById("id_ngay_cap").value;
						updateContractValue(id_ma_sinh_vien, id_cccd, id_ho_ten, id_nganh_hoc, id_so_hieu, id_so_vao_so, id_ngay_cap);

					  Swal.fire({
							title: "Thành công!",
							text: "Văn bằng đã được cập nhật.",
							icon: "success"
						  });
				   }
			  });

				document.getElementById("lb_thong_bao").innerHTML="Đã cập nhật thành công thông tin của sinh viên.";
			}else
			{
				Swal.fire({
					title: "Xảy ra lỗi!",
					text: "Sinh viên này không tồn tại.",
					icon: "error"
				  });
				document.getElementById("lb_thong_bao").innerHTML="Sinh viên này không tồn tại.";
			}
		} else {
			Swal.fire({
				title: "Xảy ra lỗi!",
				text: "Lỗi trong quá trình cập nhật dữ liệu.",
				icon: "error"
			  });
			document.getElementById("lb_thong_bao").innerHTML="Lỗi trong quá trình cập nhật dữ liệu";
		}
	});

}


submitTraCuu.addEventListener("click", XuLy_TraCuu);
submitThemMoi.addEventListener("click", XuLy_ThemMoi);
submitCapNhat.addEventListener("click", XuLy_CapNhat);
submitReset.addEventListener("click", XuLy_Reset);
/*
const myContract = new web3.eth.Contract(contractABI, contractAddress);
myContract.methods.getDiplomasForHolder('0xA95063B46359A141Da5Bb2Cf0CAD9E66Bcec0714').call((error, result) => {
    if (!error) {
        console.log('Result:', result);
    } else {
        console.error('Error:', error);
    }
});

*/
