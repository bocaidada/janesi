function getList(data){
			for(var i = 0; i < data.data.length; i++) {
				
					console.log(data.data[i]);
					console.log(data.data[i].image_url);
					console.log(data.data[i].image_url.length)
					
					if(data.data[i].image_url.length==3) {
						var li = document.createElement('li');
						li.setAttribute('listNum',data.data[i].id)
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
							'<a href="javascript:;">' +
							'<img src="' + data.data[i].image_url[0] + '" alt="" />' +
							'</a>' +
							'<span>'+data.data[i].source+'</span>' +
							'</div>' +
							'<div class="read">' +
							'<span>365</span>' +
							'<span>次阅读</span>' +
							'</div>' +
							'</div>';
							//获取三张缩略图的div
						console.log(li.getElementsByClassName('three_imgs')[0].childNodes);
						console.log(data.data[i].image_url);
						for(var j=0;j<li.getElementsByClassName('three_imgs')[0].childNodes.length;j++){
							li.getElementsByClassName('three_imgs')[0].childNodes[j].style.backgroundImage="url("+data.data[i].image_url[j]+")";
						}
						
						document.getElementById('list').appendChild(li);

					} else if(data.data[i].image_url.length==1) {
						var li = document.createElement('li');
						li.setAttribute('listNum',data.data[i].id)
						
						li.innerHTML = 
							'<div class="one_top">' +
							'<div class="one_tit ">' +
							'<div class="font mui-ellipsis-2">' + data.data[i].title + '</div>' +
							'<div class="correlation">' +
							'<div class="pho">' +
							'<a href="javascript:;">' +
							'<img src="' + data.data[i].image_url[0] + '" alt="" />' +
							'</a>' +
							'<span>'+data.data[i].source+'</span>' +
							'</div>' +
							'<div class="read">' +
							'<span>365</span>' +
							'<span>次阅读</span>' +
							'</div>' +
							'</div>' +
							'</div>' +
							'<div class="thurmd">' +
							'</div>' +
							'</div>' ;
							//如果是一张缩略图
							//console.log(li.getElementsByClassName('thurmd')[0]);
							//console.log(data.data[i].image_url[0]);
							li.getElementsByClassName('thurmd')[0].style.backgroundImage="url("+data.data[i].image_url[0]+")";
							document.getElementById('list').appendChild(li);
					} else if(data.data[i].image_url.length == 0) {
						
						if(data.data[i].image_url[0]){
						data.data[i].image_url[0]=	data.data[i].image_url[0];
					}else{
						data.data[i].image_url[0]=	'image/3.jpg';
						
					}
					//alert(data.data[i].image_url[0]);
						var li = document.createElement('li');
						li.setAttribute('listNum',data.data[i].id);
						li.innerHTML = 
							'<div class="three_tit mui-ellipsis-2">' +
							'<span>' + data.data[i].title + '</span>' +
							'</div>' +
							'<div class="correlation">' +
							'<div class="pho">' +
							'<a href="javascript:;">' +
							'<img src="' + data.data[i].image_url[0] + '" alt="" />' +
							'</a>' +
							'<span>小饭团Midy</span>' +
							'</div>' +
							'<div class="read">' +
							'<span>365</span>' +
							'<span>次阅读</span>' +
							'</div>' +
							'</div>' ;
						document.getElementById('list').appendChild(li);
					}else{
						var li = document.createElement('li');
						li.classList.add('video')
						li.setAttribute('listNum',data.data[i].id);
						li.innerHTML = 
						        '<div class="videoBox">'+
										'<div class="poster">'+
											'<div class="top">分享至</div>'+
											'<div class="bott">'+
												'<div>'+
													'<div class="shares" name="微信">'+
														'<img src="../img/wechat.png" alt="" />'+
													'</div>'+
													'<span>微信</span>'+
												'</div>'+
												'<div>'+
													'<div class="shares" name="QQ">'+
														'<img src="../img/qq.png" alt="" />'+
													'</div>'+
													'<span>QQ</span>'+
												'</div>'+
												'<div>'+
													'<div class="shares" name="朋友圈">'+
														'<img src="../img/friendcircle.png" alt="" />'+
													'</div>'+
													'<span>朋友圈</span>'+
												'</div>'+
												'<div>'+
													'<div class="shares" name="空间">'+
														'<img src="../img/room.png" alt="" />'+
													'</div>'+
													'<span>QQ空间</span>'+
												'</div>'+
											'</div>'+
											'<div class="footer">'+
												'<div class="foo_left">'+
													'<span class="iconfont" style="font-size: 0.3rem;">&#xe61a;</span>'+
													'<span class="replay">重播</span>'+
												'</div>'+
												'<div class="foo_right">'+3.45+'</div>'+
											'</div>'+
										'</div>'+
										'<video class="myvideo" controls src="'+https://qiniu-video5.vmoviercdn.com/5a55ccee13b1a.mp4+'" poster="'+../img/5.jpg+'" webkit-playsinline></video>'+
									'</div>'+
									'<div class="three_tit">'+
										'<span>'+周董为你倾情演绎甜蜜爱情——告白气球+'</span>'+
									'</div>'+
									'<div class="correlation">'+
										'<div class="pho">'+
											'<!--<a href="javascript:;">'+
												'<img src="../img/4.jpg" alt="" />'+
											'</a>-->'+
											'<span>'+小饭团Midy+'</span>'+
										'</div>'+
										'<div class="read">'+
											'<span>'+365+'</span>'+
											'<span>次阅读</span>'+
										'</div>'+
									'</div>'+;
									document.getElementById('list').appendChild(li);
					}
				}
		}

