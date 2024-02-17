const validation = new Validation();
let isValid = true;
let maNV = document.getElementById('tknv');
let tenNV = document.getElementById('name');
let email = document.getElementById('email');
let matKhau = document.getElementById('password');
let ngayLam = document.getElementById('datepicker');
let luongCB = document.getElementById('luongCB');
let chucVu = document.getElementById('chucvu');
let gioLam = document.getElementById('gioLam');

const danhSachNhanVien = new dsnv();
getLocalStorage();

function initialValidation() {
    isValid = true;
    isValid &= validation.validateTaiKhoan(maNV.value, document.getElementById("tbTKNV"), 'Tài khoản phải từ 4-6 chữ số');
    isValid &= validation.validateTen(tenNV.value, document.getElementById("tbTen"), 'Tên nhân viên phải là chữ');
    isValid &= validation.validateEmail(email.value, document.getElementById("tbEmail"), 'Email không đúng định dạng');
    isValid &= validation.validatePassword(matKhau.value, document.getElementById("tbMatKhau"), 'Mật khẩu từ 6-10 ký tự, có ít nhất 1 chữ hoa, 1 chữ số và 1 ký tự đặc biệt');
    isValid &= validation.validateLuongCB(luongCB.value, document.getElementById("tbLuongCB"), 'Lương cơ bản phải từ 1000,000 đến 20,000,000');
    isValid &= validation.validateGioLam(gioLam.value, document.getElementById("tbGiolam"), 'Giờ làm phải từ 80-200 giờ');
    isValid &= validation.validateChucVu(chucVu.value, document.getElementById("tbChucVu"), 'Vui lòng lựa chọn chức vụ');
}

maNV.oninput = function () {
    isValid &= validation.validateTaiKhoan(maNV.value, document.getElementById("tbTKNV"), 'Tài khoản phải từ 4-6 chữ số');
}

tenNV.oninput = function () {
    isValid &= validation.validateTen(tenNV.value, document.getElementById("tbTen"), 'Tên nhân viên phải là chữ');
}

email.oninput = function () {
    isValid &= validation.validateEmail(email.value, document.getElementById("tbEmail"), 'Email không đúng định dạng');
}

matKhau.oninput = function () {
    isValid &= validation.validatePassword(matKhau.value, document.getElementById("tbMatKhau"), 'Mật khẩu từ 6-10 ký tự, có ít nhất 1 chữ hoa, 1 chữ số và 1 ký tự đặc biệt');
}

luongCB.oninput = function () {
    isValid &= validation.validateLuongCB(luongCB.value, document.getElementById("tbLuongCB"), 'Lương cơ bản phải từ 1000,000 đến 20,000,000');
}

gioLam.oninput = function () {
    isValid &= validation.validateGioLam(gioLam.value, document.getElementById("tbGiolam"), 'Giờ làm phải từ 80-200 giờ');
}

chucVu.onchange = function () {
    isValid &= validation.validateChucVu(chucVu.value, document.getElementById("tbChucVu"), 'Vui lòng lựa chọn chức vụ');
}

function layThongTinNhanVien() {
    // ! Validation
    if (!isValid) return null;

    let nhanVien = new nhanvien(maNV.value, tenNV.value, email.value, matKhau.value, ngayLam.value, luongCB.value, chucVu.value, gioLam.value);
    nhanVien.phanLoaiChucVu();
    nhanVien.tinhTongLuong();
    nhanVien.loaiNhanVien();
    return nhanVien;
}

function hienThiDanhSachNV(danhsach) {
    let tbody = document.getElementById('tableDanhSach');
    tbody.innerHTML = '';
    for (let i = 0; i < danhsach.length; i++) {
        let nhanVien = danhsach[i];
        let tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${nhanVien.taiKhoan}</td>
            <td>${nhanVien.hoVaTen}</td>
            <td>${nhanVien.email}</td>
            <td>${nhanVien.ngayLam}</td>
            <td>${nhanVien.chucVu}</td>
            <td>${nhanVien.tongLuong}</td>
            <td>${nhanVien.xepLoai}</td>
            <td class="d-flex">
                <div><button data-toggle="modal" data-target="#myModal" class="my-3 mx-1 btn btn-primary" onclick="editNV('${nhanVien.taiKhoan}')">Sửa</button></div>
                <div><button class="my-3 mx-1 btn btn-danger" onclick="xoaNhanVien('${nhanVien.taiKhoan}')">Xóa</button></div>
            </td>
        `;
        tbody.appendChild(tr);
    }
}

function themNhanVien() {
    initialValidation();
    let nhanVien = layThongTinNhanVien();
    if (nhanVien == null) return;
    if (!danhSachNhanVien.themNV(nhanVien)) {
        document.getElementById('tbTKNV').style.display = 'block';
        document.getElementById('tbTKNV').innerHTML = 'Tài khoản đã tồn tại';
    }
    else {
        document.getElementById('tbTKNV').style.display = 'none';
    }
    hienThiDanhSachNV(danhSachNhanVien.arr);
    setLocalStorage();
}

function editNV(taiKhoan) {
    const nhanvien = danhSachNhanVien.timNVBangTaiKhoan(taiKhoan);
    if (nhanvien) {
        document.getElementById("btnCapNhat").style.display = "inline-block";
        document.getElementById("btnThemNV").style.display = "none";

        document.getElementById('tknv').value = nhanvien.taiKhoan;
        document.getElementById('tknv').disabled = true;
        document.getElementById('name').value = nhanvien.hoVaTen;
        document.getElementById('email').value = nhanvien.email;
        document.getElementById('password').value = nhanvien.matKhau;
        document.getElementById('datepicker').value = nhanvien.ngayLam;
        document.getElementById('luongCB').value = nhanvien.luongCoBan;
        nhanvien.chucVu === "Sếp" ? document.getElementById('chucvu').selectedIndex = 1 : nhanvien.chucVu === "Trưởng phòng" ? document.getElementById('chucvu').selectedIndex = 2 : document.getElementById('chucvu').selectedIndex = 3;
        document.getElementById('gioLam').value = nhanvien.gioLamTrongThang;
        document.getElementById('tbCapNhatThanhCong').style.display = 'none';
        document.getElementById('tbCapNhatThanhCong').innerHTML = '';
    }
}

function resetForm() {
    document.getElementById('tknv').value = "";
    document.getElementById('tknv').disabled = false;
    document.getElementById('name').value = "";
    document.getElementById('email').value = "";
    document.getElementById('password').value = "";
    document.getElementById('datepicker').value = "";
    document.getElementById('luongCB').value = "";
    document.getElementById('chucvu').selectedIndex = 0;
    document.getElementById('gioLam').value = "";
    document.getElementById('btnCapNhat').style.display = 'none';
    document.getElementById('btnThemNV').style.display = 'inline-block';
    document.getElementById('tbCapNhatThanhCong').style.display = 'none';
    document.getElementById('tbCapNhatThanhCong').innerHTML = '';
}

function xoaNhanVien(taiKhoan) {
    danhSachNhanVien.xoaNV(taiKhoan);
    hienThiDanhSachNV(danhSachNhanVien.arr);
    setLocalStorage();
}

function capNhatNhanVien() {
    initialValidation();
    let nhanVien = layThongTinNhanVien();
    if (nhanVien == null) return;
    danhSachNhanVien.capNhatNV(nhanVien);
    hienThiDanhSachNV(danhSachNhanVien.arr);
    document.getElementById('tbCapNhatThanhCong').style.display = 'block';
    document.getElementById('tbCapNhatThanhCong').innerHTML = 'Cập nhật thành công';
    setLocalStorage();
}

function timKiemNhanVienBangXepLoai() {
    const keyword = document.getElementById('searchName').value;
    let ketQua = danhSachNhanVien.timNVTheoLoai(keyword);
    hienThiDanhSachNV(ketQua);
}

function setLocalStorage() {
    const arrString = JSON.stringify(danhSachNhanVien.arr);
    localStorage.setItem("DSNV", arrString);
}

function getLocalStorage() {
    if (!localStorage.getItem("DSNV")) return;
    const arrString = localStorage.getItem("DSNV");
    const arrJSON = JSON.parse(arrString);
    console.log(arrJSON);
    danhSachNhanVien.arr = arrJSON;
    hienThiDanhSachNV(danhSachNhanVien.arr);
}