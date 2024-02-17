function nhanvien(
    _taiKhoan,
    _hoVaTen,
    _email,
    _matKhau,
    _ngayLam,
    _luongCoBan,
    _chucVu,
    _gioLamTrongThang,
    ) {
    this.taiKhoan = _taiKhoan;
    this.hoVaTen = _hoVaTen;
    this.email = _email;
    this.matKhau = _matKhau;
    this.ngayLam = _ngayLam;
    this.luongCoBan = _luongCoBan;
    this.chucVu;
    this.phanLoaiChucVu = function () {
        if (_chucVu === "sep") {
            this.chucVu = "Sếp";
        }
        else if (_chucVu === "truongphong") {
            this.chucVu = "Trưởng phòng";
        }
        else if (_chucVu === "nhanvien") {
            this.chucVu = "Nhân viên";
        }
    }
    this.gioLamTrongThang = _gioLamTrongThang;
    this.tongLuong;
    this.tinhTongLuong = function(){
        if (_chucVu === "sep") {
            this.tongLuong = this.luongCoBan * 3;
        }
        else if (_chucVu === "truongphong") {
            this.tongLuong = this.luongCoBan * 2;
        }
        else if (_chucVu === "nhanvien") {
            this.tongLuong = this.luongCoBan;
        }
    }
    this.xepLoai;
    this.loaiNhanVien = function () {
        if (this.gioLamTrongThang >= 192) {
            this.xepLoai = "Xuất sắc";
        }
        else if (this.gioLamTrongThang >= 176) {
            this.xepLoai = "Giỏi";
        }
        else if (this.gioLamTrongThang >= 160) {
            this.xepLoai = "Khá";
        }
        else {
            this.xepLoai = "Trung bình";
        }
    }
    
}
