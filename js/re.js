			
			function validate_strLenght(str){
				var regExp=/^(\w){6,20}$/;
				return regExp.test(str);
			}
			
			function validate_email(str){
				var regExp=/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
				return regExp.test(str);
			}
			
			function validate_pwd(str){
				var regExp=/^[a-zA-Z]\w{5,15}/;
				return regExp.test(str);
			}
			
			var username=document.getElementById("username");
			
			var email=document.getElementById("email");
			
			var pwd=document.getElementById("pwd");
			var pwdOk=document.getElementById("pwdOk");
			
			var form=document.getElementsByTagName("form")[0];
			
			function formSubmit(){
				
				if(validate_strLenght(username.value)&&validate_email(email.value)&&validate_pwd(pwd.value)&&checkOk()){
					
					document.getElementById("form").submit() ;
					alert("登录成功");
				}else{
					
					console.log("验证失败");
				}
			}
			
			username.onblur=function(){
				if(validate_strLenght(username.value)){
					console.log("用户名符合要求");
				}else{
					console.log("用户名不符合要求");
				}
			}
			
			email.onblur=function(){
				if(validate_email(email.value)){
					console.log("邮箱格式符合要求");
				}else{
					console.log("邮箱格式不符合要求");
				}
			}
			
			pwd.onblur=function(){
				if(validate_pwd(pwd.value)){
					console.log("密码符合要求");
				}else{
					console.log("密码不符合要求");
				}
			}
			function checkOk(){
				if(pwd.value==pwdOk.value){
					console.log("密码与重复密码一致");
					return true;
				}else{
					console.log("密码与重复密码不一致");
					return false;
				}
			}
			pwdOk.onkeyup=checkOk;
