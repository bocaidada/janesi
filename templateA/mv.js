//mv.js
//渲染相关推荐

function getList(data) {
	var recommendList = data.data.recommendList;
	for(var i = 0; i < recommendList.length; i++) {
		if(recommendList[i].contentType == 'ARTICLE') {
			//新闻类型为文章
			//0张图
			if(recommendList[i].imageSize == '0') {
				var li = document.createElement('li');
				li.setAttribute('listUrl', recommendList[i].detailUrl);
				li.innerHTML =
					'<div class="three_tit mui-ellipsis-2">' +
					'<span>' + recommendList[i].title + '</span>' +
					'</div>' +
					'<div class="correlation">' +
					'<div class="pho">' +
					'<span>' + recommendList[i].source + '</span>' +
					'</div>' +
					'<div class="read">' +
					'<span>' + recommendList[i].scanCount + '</span>' +
					'<span>次阅读</span>' +
					'</div>' +
					'</div>';

				document.getElementById('list').appendChild(li);
				
				//小于三张图
			} else if(recommendList[i].imageSize < '3') {
				var li = document.createElement('li');
				li.setAttribute('listUrl', recommendList[i].detailUrl);
				li.innerHTML =
					'<div class="one_top">' +
					'<div class="one_tit ">' +
					'<div class="font mui-ellipsis-2">' + recommendList[i].title + '</div>' +
					'<div class="correlation">' +
					'<div class="pho">' +
					'<span>' + recommendList[i].source + '</span>' +
					'</div>' +
					'<div class="read">' +
					'<span>' + recommendList[i].scanCount + '</span>' +
					'<span>次阅读</span>' +
					'</div>' +
					'</div>' +
					'</div>' +
					'<div class="thurmd">' +
					'</div>' +
					'</div>';
				li.getElementsByClassName('thurmd')[0].style.backgroundImage = "url(" + recommendList[i].images[0] + ")";
				document.getElementById('list').appendChild(li);
			} else {
				var li = document.createElement('li');
				li.setAttribute('listUrl', recommendList[i].detailUrl);
				li.innerHTML =
					'<div class="three_tit mui-ellipsis-2">' +
					'<span>' + recommendList[i].title + '</span>' +
					'</div>' +
					'<div class="three_imgs">' +
					'<div></div>' +
					'<div></div>' +
					'<div></div>' +
					'</div>' +
					'<div class="correlation">' +
					'<div class="pho">' +
					'<span>' + recommendList[i].source + '</span>' +
					'</div>' +
					'<div class="read">' +
					'<span>' + recommendList[i].scanCount + '</span>' +
					'<span>次阅读</span>' +
					'</div>' +
					'</div>';
				//获取三张缩略图的div
				for(var j = 0; j < li.getElementsByClassName('three_imgs')[0].childNodes.length; j++) {
					li.getElementsByClassName('three_imgs')[0].childNodes[j].style.backgroundImage = "url(" + recommendList[i].images[j] + ")";
				}
				document.getElementById('list').appendChild(li);
			}
		} else if(recommendList[i].contentType == 'VIDEO') {
			//新闻类型为视频
			var li = document.createElement('li');
			li.className = "video";
			li.setAttribute('listUrl', recommendList[i].detailUrl);
			li.innerHTML = 
			'<div class="three_tit">' +
				'<span>' + recommendList[i].title + '</span>' +
				'</div>' +
			'<div class="videoBox">' +
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
				'<video id="myvideo"  controls src="' + recommendList[i].videoUrl + '" poster="' + recommendList[i].videoCutUrl + '" webkit-playsinline>' +
				'</video>' +
				'<div class="foo_right">'+recommendList[i].time+'</div>' +
				'</div>' +
				
				'<div class="correlation">' +
				'<div class="pho">' +

				'<span>' + recommendList[i].source + '</span>' +
				'</div>' +
				'<div class="read">' +
				'<span>' + recommendList[i].scanCount + '</span>' +
				'<span>次播放</span>' +
				'</div>' +
				'</div>';

			document.getElementById('list').appendChild(li);
		}

	}
}