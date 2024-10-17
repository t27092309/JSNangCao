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
                inputPassword.focus();
                return;
            }


            if(inputUsername.value.trim() == 't27092309' && inputPassword.value.trim() == '111111'){
                alert("Login successfully");
                localStorage.setItem("user",inputUsername.value.trim());
                window.location = 'index.html'
            }else{
                alert("Wrong username or password")
            }

        })
    },
    start: function(){
        this.handleLogin();
    }
}

app.start();





