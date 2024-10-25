const app ={
    handleLogin: function(){
        form.addEventListener('submit',(event)=>{
            event.preventDefault();

            const inpUsername = document.getElementById('username');
            const inpPassword = document.getElementById('password');

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
                inputPassword.focus();
                return;
            }

            if(inpUsername.value.trim() == 'truongdx' && inpPassword.value.trim() == '111111'){
                alert("Login successfully");
                localStorage.setItem("user",inpUsername.value.trim());
                window.location = 'index.html';
            }else{
                alert("login failed");
            }
        })
    },
    start: function(){
        this.handleLogin();
    }
}
app.start();