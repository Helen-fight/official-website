//组件定义
//header
var baseUrl = window.location.origin+'/';
Vue.component('myHead',{
	template:`
	<header class="header" id="header">
		<div class="container">
			<div class="hamburger" id="hamburger"></div>
			<a class="logo" title="flyPower" href="#" id="logo" ></a>
			<!--<div class="nav-btn" v-if="!isLogin">
				<a id="reris-btn" href="#" data-toggle="modal" data-target="#reg-myModal">注册</a>
				<a class="login-btn" href="#" data-toggle="modal" data-target="#login-myModal">登录</a>
			</div>-->
			<div class="nav-btn" v-if="isLogin">
				<a id="reris-btn" href="#" @click="backstage">后台</a>
				<a class="login-btn" href="#" @click="exit">退出</a>
			</div>
			<ul class="nav" id="nav">
				<li><a href="index.html">智能营销</a></li>
				<li><a href="ad.html">ASO优化</a></li>
				<li><a href="developer.html">移动应用</a></li>
				<li><a href="about.html">关于我们</a></li>
			</ul>	
		</div>
	</header>`,
	data: function(){
		return {
			isLogin: true
		}
	},
	methods: {
		backstage: function(){
			if(getCookie('islogin')){
				window.location.href = baseUrl+'index/usercenter/index.html';
			}else{
				this.isLogin = false;
			}
		},
		exit: function(){
			this.isLogin = false;
			//window.sessionStorage.removeItem('login');
			delCookie('islogin');
			$.ajax({
				type: "post",
				url: baseUrl+"index/index/logout",
				success: function(res){
					//console.log(res)
				}
			});
		}
	},
	mounted: function(){
		//this.isLogin = window.sessionStorage.getItem('login')?window.sessionStorage.getItem('login'):'';
		if(getCookie('islogin')){
			this.isLogin = getCookie('islogin');
		}
	}
})
//移动端的导航
Vue.component('phead',{
	template:`
	<div id="phead">
		<div class="pshadow" id="pshadow"></div>
		<div class="sidebar" id="slidebar">
			<div class="plogo"></div>
			<p class="ptitle">FLYPOWER</p>
			<!--<div class="pbtn" v-if="!isLogin">
				<a href="#" data-toggle="modal" data-target="#reg-myModal">注册</a>
				<a href="#" data-toggle="modal" data-target="#login-myModal">登录</a>
			</div>-->
			<div class="pbtn" v-if="isLogin">
				<a href="#" data-toggle="modal" data-target="#reg-myModal" @click="backstage">后台</a>
				<a href="#" data-toggle="modal" data-target="#login-myModal" @click="exit">退出</a>
			</div>
			<ul class="pnav" id="pnav">
				<li><a href="index.html"><i class="picon"></i>智能优化</a></li>
				<li><a href="ad.html"><i class="picon picon2"></i>ASO优化</a></li>
				<li><a href="developer.html"><i class="picon picon3"></i>移动应用</a></li>
				<li><a href="about.html"><i class="picon picon4"></i>关于我们</a></li>
			</ul>
		</div>
	</div>`,
	data: function(){
		return {
			isLogin: true
		}
	},
	methods: {
		backstage: function(){
			if(getCookie('islogin')){
				window.location.href = baseUrl+'index/usercenter/index.html';
			}else{
				this.isLogin = false;
			}
		},
		exit: function(){
			this.isLogin = false;
			//window.sessionStorage.removeItem('login');
			delCookie('islogin');
			$.ajax({
				type: "post",
				url: baseUrl+"index/index/logout",
				success: function(res){
					//console.log(res)
				}
			});
		}
	},
	mounted: function(){
		//this.isLogin = window.sessionStorage.getItem('login')?window.sessionStorage.getItem('login'):'';
		if(getCookie('islogin')){
			this.isLogin = getCookie('islogin');
		}
	}
})

//footer
Vue.component('myFoot',{
	template: `
	<footer class="footer">
		<div class="container">
			<img class="logo-icon" src="css/images/logo@2x.png" />
			<p class="title">FLYPOWER</p>
			<div class="company-info">
				<p class="company">飞势科技</p>
				<p>地址：北京市朝阳区三里屯SOHO办公C 22层</p>
				<p>@2016 北京飞势科技有限公司 All Rights Reserved</p>
				<p class="copyright">京ICP备18035062号-1</p>
			</div>
		</div>
	</footer>`
})

//注册
Vue.component('register',{
	template: `
	<div class="modal fade" id="reg-myModal" tabindex="-1" role="dialog" aria-hidden="true" data-backdrop="static">
	    <div class="modal-dialog">
	        <div class="modal-content">
	            <div class="modal-header">
	                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
	            </div>
	            <div class="modal-body">
	            	<img class="reg-logo" src="css/images/logo@2x.png" />
	            	<p class="reg-title">注册</p>
	            	<div class="reg-box">
			        	<form role="form">
			        		<div class="usertype">
			        			<label class="radio-inline on">
								  <input type="radio" name="usertype" checked value="1">
								  <div class="usertype-input">
								  	<i></i><span>广告主</span>
								  </div>
								</label>
								<label class="radio-inline" style="display: none">
								  <input type="radio" name="usertype" value="0">
								  <div class="usertype-input"><i></i><span>开发者</span></div>
								</label>
								<div class="tip" id="tip">
							  		<i></i>
							  		<p>您正在注册广告主账号，可进行在线自助的广告投放操作</p>
							  	</div>
			        		</div>
			        		<div class="form-group msg-wrap clearfix">
							    <div class="col-sm-12">
							      <input type="email" class="form-control input-height" id="emial" @blur="emailBlur" v-model="email" placeholder="请输入邮箱作为账号">
							    </div>
							    <p class="msg">{{emsg}}</p>
							</div>
							<div class="form-group msg-wrap clearfix">
							    <div class="col-sm-12">
							      <input type="password" class="form-control input-height" id="pwd" @blur="pwdBlur" v-model="pwd" placeholder="请输入密码">
							    </div>
							    <p class="msg">{{pmsg}}</p>
							</div>
							<div class="form-group msg-wrap clearfix">
							    <div class="col-sm-12">
							      <input type="password" class="form-control input-height" id="pwd2" @blur="pwdBlur2" v-model="pwd2" placeholder="请确认密码">
							    </div>
							    <p class="msg">{{pmsg2}}</p>
							</div>
							<div class="form-group msg-wrap clearfix">
							    <div class="col-sm-8">
							      <input type="text" class="form-control input-height" id="code" @blur="codeBlur" v-model="code" placeholder="请输入验证码，点击图片换一张">
							    </div>
							    <div class="col-sm-4 code-box" @click="getcode">
							    	<img class="code" :src="codeHref" />
							    </div>
							    <p class="msg">{{cmsg}}</p>
							</div>						
							<div class="form-group msg-wrap clearfix">
								<div class="col-sm-12">
									<div class="checkbox">
										<label>
											<input name="aggre" @change="aggreHandle" type="checkbox" checked> 已经阅读并同意<a href="#" class="color-028FCC">《飞势科技用户协议条款》</a>
										</label>
									</div>
								</div>
								<p class="msg">{{xmsg}}</p>
							</div>
							<button id="nextBtn" class="next-btn" type="button" @click="next" >下一步</button>
							<p class="have-btn" @click="goLogin">已有账号，马上登录</p>
			        	</form>
			        </div>
	            </div>
	        </div>
	    </div>
	</div>`,
	data:function(){
		return{
			codeHref: baseUrl+'index/index/captha',	//产生验证码
			email: '',
			pwd: '',
			pwd2: '',
			u_type: '',
			code: '',
			emsg: '',
			pmsg: '',
			pmsg2: '',
			cmsg: '',
			xmsg: '',
			isCode: false,	//判断验证码是否错误
			req: true
		}		
	},
	methods:{
		getcode:function(){			
			var num = Math.random();
			this.codeHref = baseUrl+'index/index/captha'+'?id='+num;
		},
		goLogin:function(){
			$('#reg-myModal').modal('hide');
			$('#login-myModal').modal('show');
		},
		emailBlur: function(){
			if(this.email!='' && myvue.checkEmail(this.email)){
				this.emsg = '';
			}
		},
		pwdBlur: function(){
			if(this.pwd!='' && 5<this.pwd.lenght<30){
				this.pmsg = '';
			}
		},
		pwdBlur2: function(){
			if(this.pwd2!='' && this.pwd==this.pwd2){
				this.pmsg2 = '';
			}
		},
		codeBlur: function(){
			var that = this;
			this.cmsg = '';
			if(this.code!=''){				
				$.ajax({					
					url: baseUrl+'index/index/checkCaptcha',
					type:"post",
					data: {code: this.code},					
					success: function(res){
						//console.log(res)
						if(res.code==1){
							that.isCode = true;
						}else{
							that.cmsg = res.msg;
							that.isCode = false;
						}
					},
					error: function(err){
						console.log(err)
					}
				});
			}			
		},
		aggreHandle: function(){
			if($("input[name ='aggre']").is(':checked')){
				this.xmsg = '';
			}
		},
		next: function(){
			
			//$('#reg-myModal').modal('hide');
			//$('#success-myModal').modal('show');return;
			var usertype = $("input[name='usertype']:checked").val();
			var pwdLen = this.pwd.length;
			var that = this;
			if(this.email===''){
				this.emsg = '邮箱账号不能为空'
				return ;
			}
			if(!myvue.checkEmail(this.email)){
				this.emsg = '请输入正确的邮箱账号'
				return ;
			}
			if(this.pwd===''){
				this.pmsg = '密码不能为空'
				return ;
			}
			if(pwdLen<5 || pwdLen>30){
				this.pmsg = '长度需在5-30个字符之间';
				return ;
			}
			if(this.pwd2===''){
				this.pmsg2 = '请确认密码';
				return ;
			}			
			if(this.pwd!=this.pwd2){
				this.pmsg2 = '两次输入的密码不一致';
				return ;
			}
			if(this.code===''){
				this.cmsg = '验证码不能为空';
				return ;
			}
			if(!this.isCode){
				return ;
			}
			
			if(!$("input[name ='aggre']").is(':checked')){
				this.xmsg = '请勾选协议';
				return ;
			}
			
			if(this.req){
				this.req = false;
				$.ajax({
					type: 'POST',
					url: baseUrl+'index/index/regist',
					data:{
						email: this.email,
						pwd: this.pwd,
						pwd2: this.pwd2,
						code: this.code,
						u_type: usertype
					},
					success: function(res){
						that.req = true;
						//console.log(res)
						if(res.code==1){//请求成功
							myvue.$refs.success.email = that.email;
							that.email = '';
							that.pwd = '';
							that.pwd2 = '';
							that.code = '';
							that.isCode = false;
							if(usertype==='0'){	//开发者							
								$('#reg-myModal').modal('hide');
								$('#success-myModal').modal('show');
							}else if(usertype==='1'){	//广告主
								$('#reg-myModal').modal('hide');
								$('#reg2-myModal').modal('show');
							}
						}else{
							that.emsg = res.msg
						}
					},
					error: function(err){
						console.log(err)
					}
				})
			}	
		}
	}
})

//广告主注册步骤2
Vue.component('register2',{
	template: `
	<div class="modal fade" id="reg2-myModal" tabindex="-1" role="dialog" aria-hidden="true" data-backdrop="static">
	    <div class="modal-dialog">
	        <div class="modal-content">
	            <div class="modal-header">
	                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
	            </div>
	            <div class="modal-body">
	            	<img class="reg-logo" src="css/images/logo@2x.png" />
	            	<p class="reg-title">广告主注册</p>
	            	<div class="reg-box">
			        	<form role="form">		        		
			        		<div class="form-group msg-wrap clearfix">
							    <div class="col-sm-12">
							      <input type="text" class="form-control input-height" id="fullcompany" v-model="company" @blur="companyBlur" placeholder="公司全称">
							    </div>
							    <p class="msg">{{cmsg}}</p>
							</div>
							<div class="form-group msg-wrap clearfix">
							    <div class="col-sm-12">
							      <select id="industry" v-model="industry" @change="industryChange" class="form-control input-height">
							      	<option name="industry" value="">请选择所在的行业</option>
							      	<option name="industry" value="1">金融</option>
							      	<option name="industry" value="2">购物电商</option>
							      	<option name="industry" value="3">丽人母婴</option>
							      	<option name="industry" value="4">医疗健康</option>
							      	<option name="industry" value="5">健身健美</option>
							      	<option name="industry" value="6">体育运动</option>
							      	<option name="industry" value="7">图书阅读</option>						      	
							      	<option name="industry" value="8">交通导航</option>
							      	<option name="industry" value="9">旅游</option>
							      	<option name="industry" value="10">生活</option>
							      	<option name="industry" value="11">社交</option>
							      	<option name="industry" value="12">教育</option>
							      	<option name="industry" value="13">通讯</option>
							      	<option name="industry" value="14">壁纸桌面美化</option>
							      	<option name="industry" value="15">系统工具安全</option>
							      	<option name="industry" value="16">摄影摄像</option>
							      	<option name="industry" value="17">效率办公</option>
							      	<option name="industry" value="18">视频</option>
							      	<option name="industry" value="19">音乐</option>
							      	<option name="industry" value="20">网赚手赚</option>
							      	<option name="industry" value="21">汽车</option>
							      	<option name="industry" value="22">其他</option>
							      </select>
							    </div>
							    <p class="msg">{{imsg}}</p>
							</div>
							<p class="notice">请上传500kb以内</p>
							<div class="upload-box msg-wrap clearfix" style="text-align:center">
								<div class="up-item">
									<input type="file" @change="fileChange" accept="image/jpeg,image/x-png,image/gif" data-id="1" />
									<span v-if="!file1">上传营业执照</span>
									<span v-if="file1" class="on">重新上传</span>
								</div>
								<p class="msg">{{fmsg}}</p>
							</div>
							<button class="next-btn" type="button" @click="next">下一步</button>
							<div class="progress-box">
								<div class="gray-line"></div>
								<div class="progress-item">建立账号</div>
								<div class="progress-item pitem2">公司信息</div>
								<div class="progress-item pitem3 gray-item">联系信息</div>
							</div>
			        	</form>
			        </div>
	            </div>
	        </div>
	    </div>
	</div>`,
	data:function(){
		return {
			company: '',
			industry: '',
			cmsg: '',
			imsg: '',
			fmsg: '',
			file1: '',
			file2: '',
			file3: '',
			file4: '',
			req: true
		}
	},
	methods:{
		companyBlur: function(){
			if(this.company!=''){
				this.cmsg = '';
			}
		},
		industryChange: function(){
			if(this.industry!=''){
				this.imsg = '';
			}else{
				this.imsg = '请选择所在的行业';
			}
		},
		fileChange: function(e){	//选择图片
			//var id = e.target.dataset.id;
			var file = e.target.files[0];
			
			if(file){
				var imgSize=file.size/1024;
	            if(imgSize>500){
	                this.fmsg = '请上传小于500kb的图片';
	                return ;
	            }
	            this.file1 = file;         
			}		
		},
		next:function(){			
			if(this.company==''){
				this.cmsg = '公司名称不能为空'
				return ;
			}
			
			if(this.industry==''){
				this.imsg = '请选择所在的行业';
				return ;
			}			
			
			if(this.file1==''){
				this.fmsg = '请上传营业执照';
				return ;
			}
			
			var formFile = new FormData();	//通过new一个formdata对象来用ajax提交文件
			formFile.append("company",this.company);
            formFile.append("industry", this.industry);
            formFile.append("photo1",this.file1);		
			var that = this;
			
			if(this.req){
				this.req = false;
				$.ajax({
					type: 'POST',
					url: baseUrl+'index/index/registStep2',				
					data: formFile,
					processData : false,	//设置这些是干嘛用的 明天要了解下
					contentType : false,
					async:false,
					success: function(res){
						that.req = true;
						//console.log(res)
						if(res.code==1){
							that.company = '';
							that.industry = '';
							that.file1 = '';
							$('#reg2-myModal').modal('hide');
							$('#reg3-myModal').modal('show');
						}
					},
					error: function(err){
						console.log(err)
					}
				})	
			}
			
					

		}
	}
})

//广告主注册步骤3
Vue.component('register3',{
	template: `
	<div class="modal fade" id="reg3-myModal" tabindex="-1" role="dialog" aria-hidden="true" data-backdrop="static">
	    <div class="modal-dialog">
	        <div class="modal-content">
	            <div class="modal-header">
	                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
	            </div>
	            <div class="modal-body">
	            	<img class="reg-logo" src="css/images/logo@2x.png" />
	            	<p class="reg-title">广告主注册</p>
	            	<div class="reg-box">
			        	<form role="form">		        		
			        		<div class="form-group msg-wrap clearfix">
							    <div class="col-sm-12">
							      <input type="text" class="form-control input-height" id="username" v-model="username" @blur="userBlur" placeholder="联系人">
							    </div>
							    <p class="msg">{{umsg}}</p>
							</div>
							<div class="form-group msg-wrap clearfix">
							    <div class="col-sm-12">
							      <input type="text" class="form-control input-height" id="phone" v-model="phone" @blur="phoneBlur" placeholder="手机号码">
							    </div>
							    <p class="msg">{{pmsg}}</p>
							</div>
							<div class="form-group msg-wrap clearfix">
							    <div class="col-sm-12">
							      <input type="text" class="form-control input-height" id="qq" v-model="qq" @blur="qqBlur" placeholder="QQ号">
							    </div>
							    <p class="msg">{{qmsg}}</p>
							</div>
							<div class="form-group msg-wrap clearfix">
							    <div class="col-sm-12">
							      <input type="text" class="form-control input-height" id="address" v-model="address" @blur="addressBlur" placeholder="联系地址">
							    </div>
							    <p class="msg">{{amsg}}</p>
							</div>
							<button class="next-btn mar" type="button" @click="register">注册</button>
							<div class="progress-box">
								<div class="progress-item">建立账号</div>
								<div class="progress-item pitem2">公司信息</div>
								<div class="progress-item pitem3">联系信息</div>
							</div>
			        	</form>
			        </div>
	            </div>
	        </div>
	    </div>
	</div>`,
	data: function(){
		return {
			username: '',
			phone: '',
			qq: '',
			address: '',
			umsg: '',
			pmsg: '',
			qmsg: '',
			amsg: '',
			req: true
		}		
	},
	methods: {
		userBlur: function(){
			if(this.username!=''){
				this.umsg = '';
			}
		},
		phoneBlur: function(){
			if(this.phone!='' && myvue.checkPhone(this.phone)){
				this.pmsg = '';
			}
		},
		qqBlur: function(){
			if(this.qq!='' && myvue.checkQQ(this.qq)){
				this.qmsg = '';
			}
		},
		addressBlur: function(){
			if(this.address!=''){
				this.amsg = '';
			}
		},
		register: function(){
			if(this.username==''){
				this.umsg = '联系人不能为空';
				return ;
			}
			if(this.phone==''){
				this.pmsg = '手机号不能为空';
				return ;
			}
			if(!myvue.checkPhone(this.phone)){
				this.pmsg = '请输入正确的手机号';
				return ;
			}
			if(this.qq==''){
				this.qmsg = 'qq号不能为空';
				return ;
			}
			if(!myvue.checkQQ(this.qq)){
				this.qmsg = '请输入正确的QQ号';
				return ;
			}
			if(this.address==''){
				this.amsg = '联系地址不能为空';
				return ;
			}
			var that = this;
			if(this.req){
				this.req = false;
				$.ajax({
					url: baseUrl+'index/index/registStep3',
					type: 'POST',
					data:{
						contact_name:this.username,
						mobile:this.phone,
						qq:this.qq,
						address:this.address
					},
					success:function(res){
						that.req = true;
						//console.log(res)
						if(res.code==1){	//注册成功
							that.username = '';
							that.phone = '';
							that.qq = '';
							that.address = '';
							$('#reg3-myModal').modal('hide');
							$('#success-myModal').modal('show');
							myvue.$refs.success.getPwd = false;
						}
					},
					error: function(err){
						console.log(err)
					}
				})
			}	
		}
	}
})

//注册成功
Vue.component('regSuccess',{
	template: `
	<div class="modal fade" id="success-myModal" tabindex="-1" role="dialog" aria-hidden="true" data-backdrop="static">
	    <div class="modal-dialog">
	        <div class="modal-content">
	            <div class="modal-header">
	                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
	            </div>
	            <div class="modal-body">
	            	<img class="reg-logo" src="css/images/logo@2x.png" />
	            	<p v-if="!getPwd" class="reg-title"><span v-if="getPwd">恭喜注册成功</span><span v-if="!getPwd">邮箱激活</span></p>
	            	<p v-if="getPwd" class="reg-title">找回密码成功</p>
	            	<div class="reg-box" style="width: 100%;">		        	
		        		<p class="success-text">我们已经向您的邮箱：<span class="color-028FCC">{{email}}</span>发送了一封确认邮件<br />您需要点击邮件进行激活</p>
						<button class="next-btn" type="button" @click="activate">点击进行激活</button>
						<p v-if="emailMsg" class="email-msg">未找到对应的邮箱登录地址，请自己登录邮箱查看邮件！</p>
						<p v-if="!getPwd" class="have-btn" @click="sendAgain">
							<span v-if="again">还没有收到验证邮件,点击重新发送</span>
							<span v-if="!again">{{againMsg}} {{countDown}}</span>
						</p>
			        </div>
	            </div>
	        </div>
	    </div>
	</div>`,
	data: function(){
		return {
			email: '',
			getPwd: false,
			again: true,
			countDown: 1,
			againMsg: '',
			emailMsg: false
		}
	},
	methods:{
		activate: function(){	
			var uurl = this.gotoEmail(this.email);
			
			if(uurl!=''){
				if(uurl=="exmail.qq.com/login"){
					window.open("https://"+uurl);
					return ;
				}
				window.open("http://"+uurl);
			}else{
				this.emailMsg = true;
			}							
		},
		gotoEmail($mail){
			$t = $mail.split('@')[1];
            $t = $t.toLowerCase();
            if ($t == '163.com') {
                return 'mail.163.com';
            } else if ($t == 'vip.163.com') {
                return 'vip.163.com';
            } else if ($t == '126.com') {
                return 'mail.126.com';
            } else if ($t == 'qq.com' || $t == 'vip.qq.com' || $t == 'foxmail.com') {
                return 'mail.qq.com';
            } else if ($t == 'gmail.com') {
                return 'mail.google.com';
            } else if ($t == 'sohu.com') {
                return 'mail.sohu.com';
            } else if ($t == 'tom.com') {
                return 'mail.tom.com';
            } else if ($t == 'vip.sina.com') {
                return 'vip.sina.com';
            } else if ($t == 'sina.com.cn' || $t == 'sina.com') {
                return 'mail.sina.com.cn';
            } else if ($t == 'tom.com') {
                return 'mail.tom.com';
            } else if ($t == 'yahoo.com.cn' || $t == 'yahoo.cn') {
                return 'mail.cn.yahoo.com';
            } else if ($t == 'tom.com') {
                return 'mail.tom.com';
            } else if ($t == 'yeah.net') {
                return 'www.yeah.net';
            } else if ($t == '21cn.com') {
                return 'mail.21cn.com';
            } else if ($t == 'hotmail.com') {
                return 'www.hotmail.com';
            } else if ($t == 'sogou.com') {
                return 'mail.sogou.com';
            } else if ($t == '188.com') {
                return 'www.188.com';
            } else if ($t == '139.com') {
                return 'mail.10086.cn';
            } else if ($t == '189.cn') {
                return 'webmail15.189.cn/webmail';
            } else if ($t == 'wo.com.cn') {
                return 'mail.wo.com.cn/smsmail';
            } else if ($t == '139.com') {
                return 'mail.10086.cn';
            }else if($t == 'flypower.net'){
            	return 'exmail.qq.com/login';
            }else {
                return '';
            }
		},
		sendAgain: function(){
			var that = this;
			if(this.again){
				this.again = false;
				var time = setInterval(function(){
					that.countDown ++;
					if(that.countDown==60){
						that.countDown = 1;
						clearInterval(time);
						that.again = true;
						that.againMsg = '';
					}
				},1000)
				
				$.ajax({
					type: 'POST',
					url: baseUrl+'index/index/resendMail',
					success: function(res){
						//console.log(res)
						if(res.code==1){
							that.againMsg = res.msg;
						}
					},
					error: function(err){
						console.log(err)
					}
				})
				
			}			
		}
	}
})

//登录
Vue.component('login',{
	template: `
	<div class="modal fade" id="login-myModal" tabindex="-1" role="dialog" aria-hidden="true" data-backdrop="static">
	    <div class="modal-dialog">
	        <div class="modal-content">
	            <div class="modal-header">
	                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
	            </div>
	            <div class="modal-body">
	            	<img class="reg-logo" src="css/images/logo@2x.png" />
	            	<p class="reg-title">登录</p>
	            	<div class="reg-box">
			        	<form role="form">
			        		<div class="form-group msg-wrap clearfix">
							    <div class="col-sm-12">
							      <input type="text" class="form-control input-height" v-model="email" @blur="emailBlur" placeholder="账号">
							    </div>
							    <p class="msg">{{emsg}}</p>
							</div>
							<div class="form-group msg-wrap clearfix">
							    <div class="col-sm-12">
							      <input type="password" class="form-control input-height" v-model="pwd" @blur="pwdBlur" placeholder="密码">
							    </div>
							    <p class="msg">{{pmsg}}</p>
							</div>
							<p class="forget"><span @click="forget">忘记密码</span></p>
							<button class="next-btn" type="button" @click="login">登录</button>
							<p class="have-btn" @click="regNow">立即注册</p>
			        	</form>
			        </div>
	            </div>
	        </div>
	    </div>
	</div>`,
	data:function(){
		return {
			email: '',
			emsg: '',
			pwd: '',
			pmsg: ''
		}
	},
	methods:{
		emailBlur: function(){
			if(this.email!='' && myvue.checkEmail(this.email)){
				this.emsg = '';
			}
		},
		pwdBlur: function(){
			if(this.pwd!=''){
				this.pmsg = '';
			}
		},
		login: function(){
			var pwdLen = this.pwd.length;
			var that = this;
			if(this.email==''){
				this.emsg = '邮箱不能为空';
				return ;
			}
			if(!myvue.checkEmail(this.email)){
				this.emsg = '请输入正确的邮箱';
				return ;
			}
			if(this.pwd==''){
				this.pmsg = '密码不能为空';
				return ;
			}
			if(pwdLen<5 || pwdLen>30){
				this.pmsg = '长度需在5-30个字符之间';
				return ;
			}
			
			$.ajax({
				type: "POST",
				url: baseUrl+"index/index/login",
				data: {
					email: this.email,
					pwd: this.pwd
				},
				success: function(res){
					console.log(res)					
					if(res.code==1){	//登陆成功
						that.pwd = '';
						that.email = '';
						$('#login-myModal').modal('hide');
						myvue.$refs.head.isLogin = true;
						//window.sessionStorage.setItem('login',true);
						setCookie('islogin','true',1600);
						window.location.href = res.url	//跳转到后台
					}else if(res.code==-3){
						that.emsg = res.msg
					}else if(res.code==-4){
						that.pmsg = res.msg
					}else if(res.code==-5){	//邮箱未激活
						that.emsg = res.msg;
						setTimeout(function(){
							$('#login-myModal').modal('hide');
							myvue.$refs.success.email = that.email;
							myvue.$refs.success.getPwd = false;
							myvue.$refs.success.agaiin = true;
							$('#success-myModal').modal('show');
						},1000)					
					}
				},
				error: function(err){
					console.log(err)
				}
			});
			
		},
		forget:function(){
			$('#login-myModal').modal('hide');
			$('#pwd-myModal').modal('show');
		},
		regNow:function(){
			$('#login-myModal').modal('hide');
			$('#reg-myModal').modal('show');
		}
	}
})

//找回密码
Vue.component('getPwd',{
	template: `
	<div class="modal fade" id="pwd-myModal" tabindex="-1" role="dialog" aria-hidden="true" data-backdrop="static">
	    <div class="modal-dialog">
	        <div class="modal-content">
	            <div class="modal-header">
	                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
	            </div>
	            <div class="modal-body">
	            	<img class="reg-logo" src="css/images/logo@2x.png" />
	            	<p class="reg-title">找回密码</p>
	            	<div class="reg-box">
			        	<form role="form">
			        		<div class="form-group msg-wrap clearfix">
							    <div class="col-sm-12">
							      <input type="email" class="form-control input-height" v-model="email" @blur="emailBlur" placeholder="请输入注册邮箱">
							    </div>
							    <p class="msg">{{emsg}}</p>
							</div>
							<div class="form-group msg-wrap clearfix">
							    <div class="col-sm-8">
							      <input type="text" class="form-control input-height" v-model="code" @blur="codeBlur" placeholder="请输入验证码，点击图片换一张">
							    </div>
							    <div class="col-sm-4 code-box" @click="getcode">
							    	<img class="code" :src="codeHref" />
							    </div>
							    <p class="msg">{{cmsg}}</p>
							</div>
							<button class="next-btn mar" type="button" @click="sure">确定</button>
							<p class="have-btn" @click="loginNow">想起来了，马上登录</p>
			        	</form>
			        </div>
	            </div>
	        </div>
	    </div>
	</div>`,
	data:function(){
		return{
			codeHref: baseUrl+'index/index/captha',
			email: '',
			code: '',
			emsg: '',
			cmsg: '',
			isreq: true
		}
	},
	methods:{
		getcode:function(){
			var num = Math.random();
			this.codeHref = baseUrl+'index/index/captha'+'?id='+num;
		},
		loginNow: function(){
			$('#pwd-myModal').modal('hide');
			$('#login-myModal').modal('show');
		},
		emailBlur: function(){
			if(this.email!='' && myvue.checkEmail(this.email)){
				this.emsg = '';
			}
		},
		codeBlur: function(){
			this.cmsg = '';
		},
		sure:function(){
			var that = this;
			if(this.email==''){
				this.emsg = '邮箱不能为空';
				return ;
			}
			if(!myvue.checkEmail(this.email)){
				this.emsg = '请输入正确的邮箱地址';
				return ;
			}
			if(this.code==''){
				this.cmsg = '验证码不能为空';
				return ;
			}						
			
			if(this.isreq){
				this.isreq = false;
				$.ajax({
					type: 'POST',
					url: baseUrl+'index/index/getPassword',
					data: {
						email: this.email,
						code: this.code
					},
					success: function(res){
						//console.log(res);
						if(res.code==1){
							that.isreq = true;
							myvue.$refs.success.email = that.email;
							myvue.$refs.success.again = false;
							myvue.$refs.success.getPwd = true;
							$('#pwd-myModal').modal('hide');
							$('#success-myModal').modal('show');
						}else if(res.code==-2){
							that.emsg = res.msg;
						}else if(res.code==-1){
							that.cmsg = res.msg;
						}
					},
					error: function(err){
						console.log(err)
					}
				})
			}	
		}
	}
})


var myvue = new Vue({
	el: '#app',
	data:{
		email:''
	},
	methods:{
		//验证邮箱
		checkEmail:function(email){
			var reg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
			if(!reg.test(email))
            {
                return false;
            }else{
            	return true;	
            }
		},
		//验证手机号
		checkPhone:function(phone){
			var reg=/^[1][3,4,5,7,8][0-9]{9}$/; 
	        if (!reg.test(phone)) { 
	            return false;  
	        } else {  
	            return true;  
	        }  
		},
		//验证qq号
		checkQQ: function(qq){
			var reg = /^[1-9][0-9]{4,9}$/;
			if(!reg.test(qq)){
				return false;
			}else{
				return true;
			}
		}
	}
})
//cookie相关操作
//设置cookie时间以秒为单位
function setCookie(c_name,value,expireseconds){
    var exdate=new Date();
    exdate.setTime(exdate.getTime()+expireseconds * 1000);
    document.cookie=c_name+ "=" +escape(value)+
    ((expireseconds==null) ? "" : ";expires="+exdate.toGMTString())+";path=/";
}
//获取cookie
function getCookie(c_name){
    if (document.cookie.length>0){
        c_start=document.cookie.indexOf(c_name + "=");
        if (c_start!=-1){
            c_start=c_start + c_name.length+1;
            c_end=document.cookie.indexOf(";",c_start);
            if (c_end==-1){ 
                c_end=document.cookie.length;
            }
            return unescape(document.cookie.substring(c_start,c_end));
        }
    }
    return "";
}
//删除cookie
function delCookie(key){ 
    var date = new Date(); //获取当前时间
    date.setTime(date.getTime()-10000); //将date设置为过去的时间
    document.cookie = key + "=v; expires =" +date.toGMTString()+";path=/";	//设置cookie
 }


//注册弹窗页面，广告主和开发者选择事件
$('.usertype .radio-inline').on('click',function(){
	$('.usertype .radio-inline').removeClass('on');
	$(".usertype input[type='radio']").removeAttr('checked');
	$(this).addClass('on');
	$(this).find("input").attr('checked','checked');		
	if($("input[name='usertype']:checked").val()==='1'){
		$('#tip').find('p').html('您正在注册广告主账号，可进行在线自助的广告投放操作');
		$('#nextBtn').html('下一步');
	}else if($("input[name='usertype']:checked").val()==='0'){
		$('#tip').find('p').html('您正在注册开发者账号，可进行嵌入App的广告变现合作');
		$('#nextBtn').html('确定');
	}
	return false;
});

//导航跳转，添加样式
function navChange(domc){
	var href = window.location.href,hrefLen = href.length-1;
	if(href.lastIndexOf('/')===hrefLen){
		domc.eq(0).addClass('on');
	}
	domc.each(function(){
		if(window.location.href==this.href){
	        $(this).addClass("on");
	  	}
	})
}
var winWidth = $(window).width();
if(winWidth<768){	
	navChange($('#pnav li a'));
}else{
	navChange($('#nav li a'));
}

//导航动效
var ss = false;
$(window).scroll(function(){
	var scrolltop = $(window).scrollTop();
	if(scrolltop>=100){
		ss = false;
		headOn();
	}else{
		ss = true;
		hedadOut();
	}
});	
function headOn(){
	$('#header').addClass('on');
	$('#logo').css('background','url(css/images/logo2.png) no-repeat');
	$('#hamburger').css('background','url(css/images/hamburger2.png) no-repeat center');
	$('#nav li a,#reris-btn').css('color','#333');
}
function hedadOut(){
	$('#header').removeClass('on');
	$('#logo').css('background','url(css/images/logo.png) no-repeat');
	$('#hamburger').css('background','url(css/images/hamburger.png) no-repeat center');
	$('#nav li a,#reris-btn').css('color','#fff');
}	
$('#nav li a,.nav-btn a').hover(function(){
	if($(window).scrollTop()>=100){
		ss = false;			
	}else{
		ss = true;
		headOn();
	}		
})	
$('.header').stop(true).mouseleave(function(){
	if(ss){
		hedadOut();
	}		
});

//移动端导航
$('#hamburger,#pshadow').on('click',function(e){
	if(e.currentTarget.id==="hamburger"){
		$('#pshadow').css({'opacity':.3,'zIndex':100});
		$('#slidebar').css('left',0);
	}else{
		$('#pshadow').css({'opacity':0,'zIndex':-1});
		$('#slidebar').css('left','-100%');
	}	
})

