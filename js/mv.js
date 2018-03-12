//mv.js


//渲染相关推荐

function getList(data) {
	var recommendList=data.data.recommendList;
	console.log(recommendList);
	for(var i = 0; i < recommendList.length; i++) {
		
		
		if(recommendList[i].contentType=='ARTICLE'){
		
		}else if(recommendList[i].contentType=='VIDEO'){
			//新闻类型为视频
		}
		
		
		
		//三张图
		if(data.data[i].image_url.length == 3) {
			var table = document.body.querySelector('#list');
			var cells = document.body.querySelectorAll('li');
			var li = document.createElement('li');
			li.setAttribute('listNum', data.data[i].id)
			li.innerHTML =
				'<div class="three_imgs">' +
				'<div></div>' +
				'<div></div>' +
				'<div></div>' +
				'</div>' +
				'<div class="three_tit mui-ellipsis-2">' +
				'<span>' + data.data[i].title + '</span>' +
				'</div>' +
				'<div class="correlation">' +
				'<div class="pho">' +
				'<span>' + data.data[i].source + '</span>' +
				'</div>' +
				'<div class="read">' +
				'<span>365</span>' +
				'<span>次阅读</span>' +
				'</div>' +
				'</div>';
			//获取三张缩略图的div
			//console.log(li.getElementsByClassName('three_imgs')[0].childNodes);
			//console.log(data.data[i].image_url);
			for(var j = 0; j < li.getElementsByClassName('three_imgs')[0].childNodes.length; j++) {
				li.getElementsByClassName('three_imgs')[0].childNodes[j].style.backgroundImage = "url(" + data.data[i].image_url[j] + ")";
			}
			document.getElementById('list').appendChild(li);
			//一张图
		} else if(data.data[i].image_url.length == 1) {
			var table = document.body.querySelector('#list');
			var cells = document.body.querySelectorAll('li');
			var li = document.createElement('li');
			li.setAttribute('listNum', data.data[i].id)
			li.innerHTML =
				'<div class="one_top">' +
				'<div class="one_tit ">' +
				'<div class="font mui-ellipsis-2">' + data.data[i].title + '</div>' +
				'<div class="correlation">' +
				'<div class="pho">' +
				'<span>' + data.data[i].source + '</span>' +
				'</div>' +
				'<div class="read">' +
				'<span>365</span>' +
				'<span>次阅读</span>' +
				'</div>' +
				'</div>' +
				'</div>' +
				'<div class="thurmd">' +
				'</div>' +
				'</div>';
			//如果是一张缩略图
			//console.log(li.getElementsByClassName('thurmd')[0]);
			//console.log(data.data[i].image_url[0]);

			li.getElementsByClassName('thurmd')[0].style.backgroundImage = "url(" + data.data[i].image_url[0] + ")";
			document.getElementById('list').appendChild(li);
			//纯文字，没有图
		} else if(data.data[i].image_url.length == 0) {
			var table = document.body.querySelector('#list');
			var cells = document.body.querySelectorAll('li');
			var li = document.createElement('li');
			li.setAttribute('listNum', data.data[i].id);
			li.innerHTML =
				'<div class="three_tit mui-ellipsis-2">' +
				'<span>' + data.data[i].title + '</span>' +
				'</div>' +
				'<div class="correlation">' +
				'<div class="pho">' +
				'<span>小饭团Midy</span>' +
				'</div>' +
				'<div class="read">' +
				'<span>365</span>' +
				'<span>次阅读</span>' +
				'</div>' +
				'</div>';

			document.getElementById('list').appendChild(li);
			//视频数据
		}else if(){
			var table = document.body.querySelector('#list');
			var cells = document.body.querySelectorAll('li');
			var li = document.createElement('li');
			li.className = "video";
			li.setAttribute('listNum', data.data[i].id)
			li.innerHTML = '<div class="videoBox">' +
				'<div class="poster">' +
				'<div class="top">分享至</div>' +
				'<div class="bott">' +
				'<div>' +
				'<div class="shares weixin" name="微信">' +
				'<img src="images/weixin.png" alt="" />' +
				'</div>' +
				'<span>微信</span>' +
				'</div>' +
				'<div>' +
				'<div class="shares qq" name="QQ">' +
				'<img src="images/qq.png" alt="" />' +
				'</div>' +
				'<span>QQ</span>' +
				'</div>' +
				'<div>' +
				'<div class="shares pengyouquan" name="朋友圈">' +
				'<img src="images/friend.png" alt="" />' +
				'</div>' +
				'<span>朋友圈</span>' +
				'</div>' +
				'<div>' +
				'<div class="shares kongjian" name="空间">' +
				'<img src="images/room.png" alt="" />' +
				'</div>' +
				'<span>QQ空间</span>' +
				'</div>' +
				'</div>' +
				'<div class="footer">' +
				'<div class="foo_left">' +
				'<span class="replay">重播</span>' +
				'</div>' +
				
				'</div>' +
				'</div>' +
				'<video id="myvideo"  controls src="https:' + data.data[i].content + '" poster="' + data.data[i].image_link + '" webkit-playsinline>' +
				'</video>' +
				'<div class="foo_right">3.45</div>' +
				'</div>' +
				'<div class="three_tit">' +
				'<span>' + data.data[i].title + '</span>' +
				'</div>' +
				'<div class="correlation">' +
				'<div class="pho">' +
				
				'<span>小饭团Midy</span>' +
				'</div>' +
				'<div class="read">' +
				'<span>365</span>' +
				'<span>次阅读</span>' +
				'</div>' +
				'</div>';

			document.getElementById('list').appendChild(li);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
		
		
		}
	}
}
