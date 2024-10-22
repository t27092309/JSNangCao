<<<<<<< HEAD


const app ={
    handleLogin: function(){
        // định nghĩa sự kiện submit của form
        const form = document.getElementById('form');
        form.addEventListener('submit',(e)=>{
            e.preventDefault();

            // lấy input
            const inputUsername = document.getElementById('username')
            const inputPassword = document.getElementById('password')

            // validate

            if(!inputUsername.value.trim()){
                alert("Cần nhập username");
                inputUsername.focus();
                return;
            }
            if(!inputPassword.value.trim()){
                alert("Cần nhập password");
                inputPassword.focus();
                return;
            }
            if(inputPassword.value.trim().length < 6){
                alert("cần nhập password tối thiểu 6 kí tự");
=======
const app = {
    handleLogin: function () {
        const form = document.getElementById('form');
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const inputUsername = document.getElementById('username')
            const inputPassword = document.getElementById('password')

            if (!inputUsername.value.trim()) {
                alert('Cần nhập username');
                inputUsername.focus();
                return;
            }
            if (!inputPassword.value.trim()) {
                alert('Cần nhập password');
                inputPassword.focus();
                return;
            }
            if (inputPassword.value.trim().length < 6) {
                alert('Cần nhập password tối thiểu 6 kí tự');
>>>>>>> 621a0a6af7d14df10ef1a71aa67a09fc194e206a
                inputPassword.focus();
                return;
            }

<<<<<<< HEAD
            // kiểm tra tài khoản và mật khẩu
            // hard code
            if(inputUsername.value.trim() == 'chinhpd5' && inputPassword.value.trim()== '123456'){
                alert("Đăng nhập thành công");
                //lưu trữ trạng thái đăng nhập local storage
                localStorage.setItem("user",inputUsername.value.trim());
                // chuyển về trang danh sach
                window.location ='index.html'

            }else{
                alert("Sai tài khoản hoặc mật khẩu")
            }
=======

            if(inputUsername.value.trim() == 't27092309' && inputPassword.value.trim() == '111111'){
                alert("Login successfully");
                localStorage.setItem("user",inputUsername.value.trim());
                window.location = 'index.html'
            }else{
                alert("Wrong username or password")
            }

>>>>>>> 621a0a6af7d14df10ef1a71aa67a09fc194e206a
        })
    },
    start: function(){
        this.handleLogin();
<<<<<<< HEAD
    }   
}

app.start();
=======
    }
}

app.start();





>>>>>>> 621a0a6af7d14df10ef1a71aa67a09fc194e206a
