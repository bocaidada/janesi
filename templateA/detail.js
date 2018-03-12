//	ios调用底部分享
function tapShare(){
	mui('#share').popover('toggle')
};
//var url = "http://yun.janesi.net/web-test/zhiqu-web/templete/article.html?apiVersion=V0.1&apiTime=1520238927239&appId=10010&userId=10&udid=6B322367-9453-4951-B9C1-1E3D9DE3C7CC&deviceId=10&contentId=46bc136101904d9389c9b8a7142babf0&title=%E6%95%99%E8%82%B2%E9%83%A8%EF%BC%9A%E8%B6%B3%E7%90%83%E6%93%8D%E6%97%A2%E4%B8%8D%E6%98%AF%E6%A0%A1%E5%9B%AD%E8%B6%B3%E7%90%83%20%E4%B9%9F%E4%B8%8D%E6%98%AF%E5%BD%A2%E5%BC%8F%E4%B8%BB%E4%B9%89&source=%20&scanCount=1&contentType=ARTICLE"
var url="http://yun.janesi.net/web-test/zhiqu-web/templete/mv.html?apiVersion=V0.1&apiTime=1520221177007&appId=10010&userId=10&udid=6B322367-9453-4951-B9C1-1E3D9DE3C7CC&deviceId=10&contentId=52dcbf0ad181e2bd80128bc4ddae5bc7&title=%E7%8C%AB%E5%92%AA%E5%88%9B%E6%84%8F%E7%94%9F%E6%B4%BB%E7%9F%AD%E7%89%87%E3%80%8A%E5%8A%9E%E5%85%AC%E5%AE%A4%E9%87%8C%E7%9A%84%E9%97%B9%E5%BF%83%E4%BA%8B%E3%80%8B&source=%20&scanCount=1&contentType=VIDEO"
//var listUrls = location.href.split('?')[1];
var listUrls = url.split('?')[1];
//console.log()
listUrls = listUrls.split('&');

var arr = [];
for(var i = 0; i < listUrls.length; i++) {
	arr.push(listUrls[i].split('='));
}
//获取地址栏数据
//function GetQueryString(name){
//	var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
//	var r = window.location.search.substr(1).match(reg);
//	if(r!=null)return  unescape(r[2]); return null;
//}

var data = {
	"apiVersion": arr[0][1],
	"apiTime": parseInt(arr[1][1]),
	"appId": parseInt(arr[2][1]),
	"userId": parseInt(arr[3][1]),
	"udid": arr[4][1],
	"deviceId": parseInt(arr[5][1]),
	"contentId": arr[6][1],
	"signature": "",
	"contentType": arr[10][1]
};





mui.plusReady(
	hit.addEventListener('tap', function() {
		this.classList.toggle('hit_but_hot');
		var num = parseInt(this.children[2].innerHTML);

		if(flag) {
			if(num > 999) {
				this.children[2].innerHTML = num + "(+)";
			} else {
				this.children[2].innerHTML = num + 1;
				this.children[1].innerHTML = '已赞';
				this.children[1].style.borderRight='0.01rem solid #ef5757'
			}
			flag = false;
			mui.ajax({
				url: 'http://zq.janesi.net/content/likeContent',
				type: 'post',
				data: data,
				headers: {
					"Content-Type": "application/json;charset=UTF-8"
				},
				dataType: 'json',
				success: function(e) {
					console.log(e)
					if(e.success) {
					}
				}

			});

		} else {
			//url = 'http://111.231.75.58:17790/content/unlikeContent';
			this.children[2].innerHTML = num - 1;
			this.children[1].innerHTML = '点赞';
			this.children[1].style.borderRight='0.01rem solid #A6A6A6'
			flag = true;
			mui.ajax({
				url: 'http://zq.janesi.net/content/unlikeContent',
				type: 'post',
				dataType: 'json',
				data: data,
				headers: {
					"Content-Type": "application/json;charset=UTF-8"
				},
				success: function(e) {
					flag = true;
				}
			});
		}

	}),
	collect.addEventListener('tap', function() {
		this.classList.toggle('but_hot');
		var that=this;
		if(flag1) {
			mui.ajax({
				url: 'http://zq.janesi.net/content/collectContent',
				type: 'post',
				dataType: 'json',
				data: data,
				headers: {
					"Content-Type": "application/json;charset=UTF-8"
				},
				success: function(e) {
					console.log(e);
					if(e.success) {
						that.children[1].innerHTML = '已收藏';
						mui.toast(e.desc);
						flag1 = false;
						
					}else{
						that.children[1].innerHTML = '重新收藏';
						mui.toast(e.desc);
						flag1 = true;
					}

				}
			});

		} else {
			flag1 = true;
			mui.ajax({
				url: 'http://zq.janesi.net/content/uncollectContent',
				type: 'post',
				dataType: 'json',
				data: data,
				headers: {
					"Content-Type": "application/json;charset=UTF-8"
				},
				success: function(e) {
					if(e.success) {
						that.children[1].innerHTML = '收藏';
						mui.toast("已取消收藏!")
					}
				}
			});

		}

	}),

	//举报
	document.getElementById('inform').addEventListener('tap', function() {
		//通知举报
		window.webkit.messageHandlers.iOSreport.postMessage('jubao');
	}),

	//文章列表
	mui('#list').on('tap', 'li', function() {
		var lid = this.getAttribute('listUrl');
//		location.href = lid;
		location.href = 'mv.html';
	}),

	//分享底部弹窗
	mui('body').on('tap', '.mui-popover-action li>a', function() {
		var a = this,
			parent;
		//根据点击按钮，反推当前是哪个actionsheet
		for(parent = a.parentNode; parent != document.body; parent = parent.parentNode) {
			if(parent.classList.contains('mui-popover-action')) {
				break;
			}
		}
		//关闭actionsheet
		mui('#' + parent.id).popover('toggle');
	}),

	//发送分享目的地
	mui('.bott').on('tap', '.shares', function() {
		var attr = this.getAttribute('name');
		alert(attr);
		//通知分享
		window.webkit.messageHandlers.iOSShare.postMessage(attr);

	}),

	mui('.article_content').on('tap', 'img', function() {
		this.setAttribute('data-preview-src', '')
		this.setAttribute('data-preview-group', '1')
		//					alert(1)
	}),

	//	document.querySelector('.replay').addEventListener('tap', function() {
	//		document.querySelector('.poster').style.display = "none";
	//		media.play();
	//
	//	}),
//	mui('header').on('tap', '#back', function() {
//		window.webkit.messageHandlers.backPre.postMessage("return"); //注意 这里一定要输入参数,哪怕是null,不然oc收不到消息
//	}),
//
//	document.body.addEventListener('swiperight', function() {
//		window.webkit.messageHandlers.backPre.postMessage("return"); //注意 这里一定要输入参数,哪怕是null,不然oc收不到消息
//	}),
	mui('header').on('tap', '.mui-pull-right', function() {
		var bott = document.querySelectorAll('#share .bott>div');
		var shRight = document.querySelector('.mui-pull-right');
		if(!(parseInt(qq) && parseInt(weChat))) {
			if(parseInt(qq) == true && parseInt(weChat) == false) {
				shRight.href = '#share';
				bott[0].style.display = 'none';
				bott[2].style.display = 'none';
			} else if(parseInt(qq) == false && parseInt(weChat) == true) {
				shRight.href = '#share';
				bott[1].style.display = 'none';
				bott[3].style.display = 'none';
			} else {
				document.querySelector('.mui-table-view-cell').innerHTML='没有安装相关软件';
			}
		} else {
			shRight.href = '#share';
		}
	}),
				mui('.remarkList').on('tap', '.replyNum', function() {
					location.href = 'replay.html'
				}),
	
	//	评论点赞
				mui('.remarkList').on('tap', '.remarkHit', function() { 
					var num = parseInt(this.children[1].innerHTML);
					this.classList.toggle('remarkHitHot');
					var flag = eval(this.getAttribute('flag'));
					if(flag) {
						//			mui.ajax({
						//				url: '',
						//				type: '',
						//				dataType: '',
						//				success: function(e) {
						//					if(e) {
						//
						//					}
						//				}
						//			});
						this.children[1].innerHTML = num + 1;
						this.setAttribute('flag', false)
					} else {
						//			mui.ajax({
						//				url: '',
						//				type: '',
						//				dataType: '',
						//				success: function(e) {
						//					if(e) {
						//
						//					}
						//				}
						//			});
						this.children[1].innerHTML = num - 1;
						this.setAttribute('flag', true)
					}
				}),

				//	底部留言
				document.getElementById('shar_left').addEventListener('tap', function() {
					document.getElementById('tab_share').style.display = 'none';
					document.getElementById('tab_share_search').style.display = 'block';

				}),

				//	发布评论
				document.getElementById('shar_right').addEventListener('tap', function() {
					var val = document.getElementById('remarkCon').value
					if(val){

					document.getElementById('remarkCon').value = '';
					document.getElementById('tab_share').style.display = 'block';
					document.getElementById('tab_share_search').style.display = 'none';
					var chil = document.getElementById('newRemarkList');
					var li = document.createElement('li');
					li.innerHTML = `
			 		<div class="listLeft">
												<div>
													<img src="../img/4.jpg" alt="" />
												</div>
											</div>
											<div class="ListRight">
												<div class="ListRightTop">
													<div class="user">路人甲</div>
													<div class="remarkHit" flag='true'>
														<span class="iconfont">&#xe60c;</span>
														<span>0</span>
													</div>
												</div>
												<div class="remarkCon">
													${val}
												</div>
												<div class="ListRightBot">
													<div class="pubdate">
														<span>刚刚</span>
													</div>
													<div class="replyNum">
														<span>回复</span>
													</div>
												</div>
											</div>
			`;
					chil.insertBefore(li, chil.children[0]);
											
					}
				}),
				//底部收藏
				mui('.shar_right').on('tap', '.botColl', function() {
					this.classList.toggle('botCollHot')
					var bot=document.getElementById('botColl')
					if(flag2) {
						//			mui.ajax({
						//				url: '',
						//				type: '',
						//				dataType: '',
						//				success: function(e) {
						//					if(e) {
						//
						//					}
						//				}
						//			});
						flag2 = !flag2;
						bot.innerHTML='&#xe620;'
						mui.toast("收藏成功!")
					} else {
						//			mui.ajax({
						//				url: '',
						//				type: '',
						//				dataType: '',
						//				success: function(e) {
						//					if(e) {
						//
						//					}
						//				}
						//			});
						flag2 = !flag2;
						bot.innerHTML='&#xe61c;';
						mui.toast("已取消收藏!")
					}
				}),
				

				
				
				
	
)