const taiKhoanValidation = /^[0-9]{4,6}$/;
const tenValidation = /^[A-Za-z\s]+$/;
const emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const passwordValidation = /^(?=.*\d)(?=.*[A-Z])(?=.*\W).{6,10}$/;
// const ngayLamValidation = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/(19|20)\d\d$/;
const luongCBValidation = /^(1[0-9]{6,7}|[2-9][0-9]{6}|20000000)$/;
const gioLamValidation = /^[8-9][0-9]|[1][0-9]{2}|200$/;
const chucVuValidation = /sep|truongphong|nhanvien/;

function Validation() {
    this.validateTaiKhoan = function (value, messageElement, message) {
        if (!taiKhoanValidation.test(value)){
            messageElement.innerHTML = message;
            messageElement.style.display = 'block';
            return false;
        }
        else {
            messageElement.style.display = 'none';
        }
        return true;
    }
    this.validateTen = function (value, messageElement, message) {
        if (!tenValidation.test(value)){
            messageElement.innerHTML = message;
            messageElement.style.display = 'block';
            return false;
        }
        else {
            messageElement.style.display = 'none';
        }
        return true;
    }
    this.validateEmail = function (value, messageElement, message) {
        if (!emailValidation.test(value)){
            messageElement.innerHTML = message;
            messageElement.style.display = 'block';
            return false;
        }
        else {
            messageElement.style.display = 'none';
        }
        return true;
    }
    this.validatePassword = function (value, messageElement, message) {
        if (!passwordValidation.test(value)){
            messageElement.innerHTML = message;
            messageElement.style.display = 'block';
            return false;
        }
        else {
            messageElement.style.display = 'none';
        }
        return true;
    }
    this.validateLuongCB = function (value, messageElement, message) {
        if (!luongCBValidation.test(value)){
            messageElement.innerHTML = message;
            messageElement.style.display = 'block';
            return false;
        }
        else {
            messageElement.style.display = 'none';
        }
        return true;
    }
    this.validateGioLam = function (value, messageElement, message) {
        if (!gioLamValidation.test(value)){
            messageElement.innerHTML = message;
            messageElement.style.display = 'block';
            return false;
        }
        else {
            messageElement.style.display = 'none';
        }
        return true;
    }
    this.validateChucVu = function (value, messageElement, message) {
        if (!chucVuValidation.test(value)){
            messageElement.innerHTML = message;
            messageElement.style.display = 'block';
            return false;
        }
        else {
            messageElement.style.display = 'none';
        }
        return true;
    }
}

