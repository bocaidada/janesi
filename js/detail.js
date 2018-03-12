//侧滑容器父节点
var offCanvasWrapper = mui('#offCanvasWrapper');
//主界面容器
var offCanvasInner = offCanvasWrapper[0].querySelector('.mui-inner-wrap');
//菜单容器
var offCanvasSide = document.getElementById("offCanvasSide");

//移动效果是否为整体移动
var moveTogether = false;

//主页面区域滚动事件
mui('#offCanvasContentScroll').scroll({
	indicators: false
})

//flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
mui('.mui-scroll-wrapper').scroll({
	deceleration: 0.005
});

var media = document.querySelector('.myvideo');
var eventTester = function(e) {
	media.addEventListener(e, function() {
		var t1 = setInterval(function() {
			if(media.ended) {
				document.querySelector('.poster').style.display = "block";
				clearInterval(t1);
			}
		}, 1);

	}, false);
}
eventTester("play");
//点赞   收藏
mui.plusReady(
	hit.addEventListener('tap', function() {
		this.classList.toggle('but_hot');
		var num = parseInt(this.children[2].innerHTML);
		if(flag) {
			if(num > 999) {
				this.children[2].innerHTML = num + "(+)";
			} else {
				this.children[2].innerHTML = num + 1;
				this.children[1].innerHTML = '已赞';
			}
			var imgbox = document.querySelector('.timgBox');
			imgbox.style.display = 'block';
			var n = 0;
			var t1 = setInterval(function() {
				n += 0.06;
				imgbox.style.transform = "scale(" + n + ")";
			}, 1)
			flag = false;
			setTimeout(function() {
				clearInterval(t1)
			}, 500)
			setTimeout(function() {
				imgbox.style.transform = "scale(0)";
				imgbox.style.display = 'none';
			}, 1000)

			mui.ajax({
				url: '',
				type: '',
				dataType: '',
				success: function(e) {
					console.log(e)
				}
			});

		} else {
			//			alert('取消点赞')
			this.children[2].innerHTML = num - 1;
			this.children[1].innerHTML = '点赞';
			flag = true;
		}

	}),
	collect.addEventListener('tap', function() {
		this.classList.toggle('but_hot');
		if(flag1) {
			mui.ajax({
				url: '',
				type: '',
				dataType: '',
				success: function(e) {
					if(e) {

					}
				}
			});
			this.children[1].innerHTML = '已收藏';
			setTimeout(function() {
				mui.toast("收藏成功!")
			}, 500)
			flag1 = false;
		} else {
			mui.ajax({
				url: '',
				type: '',
				dataType: '',
				success: function(e) {
					if(e) {

					}
				}
			});
			this.children[1].innerHTML = '收藏';
			setTimeout(function() {
				mui.toast("已取消收藏!", 'div')
			}, 500)
			flag1 = true;
		}

	}),

	//举报
	document.getElementById('inform').addEventListener('tap', function() {
		//					var iden="举报";
		//					alert(iden);
		mui.openWindow({
			url: 'report.html'
		})
		//					var inform = plus.ios.importClass("NSNotificationCenter");
		//					inform.defaultCenter().postNotificationNameobject("举报", null);
	}),

	//文章列表
	mui('.recommend').on('tap', 'li', function() {
		var lid = this.getAttribute('lid');
		if(lid != '4') {
			location.href = "article.html?id" + lid
		} else {
			location.href = "mv.html?id=" + lid
		}

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

		//					var share = plus.ios.importClass("NSNotificationCenter");
		//					share.defaultCenter().postNotificationNameobject(attr, null);

	}),

	mui('.article_content').on('tap', 'img', function() {
		this.setAttribute('data-preview-src', '')
		this.setAttribute('data-preview-group', '1')
		//					alert(1)
	}),

	document.querySelector('.replay').addEventListener('tap', function() {
		document.querySelector('.poster').style.display = "none";
		media.play();

	}),
	//添加newId自定义事件监听
	//  window.addEventListener('detailId',function(event){
	//    //获得事件参数
	//    var id = event.detail.id;
	//    //根据id向服务器请求新闻详情
	//    alert(id);
	//  })
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

	//	document.getElementById('remarkCon').addEventListener('focus',function(){
	//		document.getElementById('inHit').style.display='none';
	//		this.value='';
	//		this.style.paddingLeft='0.3rem';
	//		this.placeholder='优质评论将会被优先展示';
	//
	//	}),
	//	
	//	document.getElementById('remarkCon').addEventListener('blur',function(){
	//		document.getElementById('tab_share').style.display='block';
	//		document.getElementById('inHit').style.display='block';
	//		this.value='写评论';
	//		this.style.paddingLeft='0.75rem';
	//		this.placeholder='';
	//	}),
	//	document.getElementById('remarkCon').addEventListener('keypress',function(e){
	//		if(e.keyCode==13){
	//			alert(this.value)
	//		}
	//	}),
	
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
													<span>20</span>
													<span>分钟前</span>
												</div>
												<div class="replyNum">
													<span>10</span>
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
		}
	})
)