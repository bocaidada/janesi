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
					'<div class="three_imgs">' +
					'<div></div>' +
					'<div></div>' +
					'<div></div>' +
					'</div>' +
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
				//获取三张缩略图的div
				for(var j = 0; j < li.getElementsByClassName('three_imgs')[0].childNodes.length; j++) {
					li.getElementsByClassName('three_imgs')[0].childNodes[j].style.backgroundImage = "url(" + recommendList[i].images[j] + ")";
				}
				document.getElementById('list').appendChild(li);
			}
		} else if(recommendList[i].contentType == 'VIDEO') {
			//新闻类型为视频
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
					'<div class="thurmd" id="thurmd">' +
					'<div class="playTime">'+recommendList[i].time+'</div>'+
					'</div>' +
					'</div>';
				li.document.getElementById('thurmd').style.backgroundImage = "url(" + recommendList[i].images[0] + ")";
				document.getElementById('list').appendChild(li);

			document.getElementById('list').appendChild(li);
		}

	}
}