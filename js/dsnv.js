function dsnv() {
    this.arr = [];

    this.themNV = function (nv) {
        const index = this.arr.findIndex((nhanvien) => nhanvien.taiKhoan == nv.taiKhoan);
        if (index == -1) {
            this.arr.push(nv);
            return true;
        }
        else {
            return false;
        }
    };

    this.xoaNV = function (taiKhoan) {

        const index = this.arr.findIndex((nhanvien) => nhanvien.taiKhoan == taiKhoan);
        if (index !== -1) {
            this.arr.splice(index, 1);
        }
    };

    this.capNhatNV = function (nv) {
        const index = this.arr.findIndex((nhanvien) => nhanvien.taiKhoan == nv.taiKhoan);
        if (index !== -1) {
            this.arr[index] = nv;
        }
    };


    this.timNVBangTaiKhoan = function (taiKhoan) {
        const index = this.arr.findIndex((nhanvien) => nhanvien.taiKhoan == taiKhoan);
        if (index !== -1) {
            return this.arr[index];
        }
        return null;
    };

    this.timNVTheoLoai = function (xepLoai) {
        // ! method filter của array sẽ trả về một array mới thỏa điều kiện của hàm bên trong filter
        // ? ở đây, trả về một array chứa tất cả các nhân viên có xepLoai trùng với xepLoai truyền vào
        const danhSachTimKiem = this.arr.filter((nhanvien) => nhanvien.xepLoai.toLowerCase().includes(xepLoai.toLowerCase()));
        return danhSachTimKiem;
    };
}
