$(function() {

	function set_map_info(json,id){
		$.ajaxSetup({
			scriptCharset:'utf-8',
			cache: false
		});

		$.ajax({
			url: "./data/"+ json +".json",
			dataType: "json"

			}).done(function(data) {

				var shopHtml = '';
				var dir = '';

				if(json === 'beer_info') {
					var dir = 'beer-booth';
				} else if(json === 'beer_garden_info'){
					var dir = 'beer-garden';
				} else if(json === 'goods_info'){
					var dir = 'goods';
				}
				// else if(json === 'hofbrau_booth_info'){
				// 	var dir = 'hofbrau-booth';
				// }

				for(var i=0; i < data.length; i++){

					var _data = data[i];

					//タグ処理
					var obj = data[i].tag;
					var tag = [];
					$.each(obj, function(key,value) {
						if(value !== "") {
							result = value;
							tag.push(result);
						}
					});

					//連番
					var shopNum = _data.shopNum || '';
					//ショップタイトル
					var shopTtl = _data.shopName || '';
					// tag 1
					var tag1 = _data.tag['tag_1（ビール）'] || '';
					// tag 2
					var tag2 = _data.tag['tag_2（ビール）'] || '';
					// tag 3
					var tag3 = _data.tag['tag_3（ビール）'] || '';
					// tag 4
					var tag4 = _data.tag['tag_4（ビール）'] || '';
					// tag 5（Food用）
					var tag5 = _data.tag['tag_5（フード）'] || '';
					// tag 6（Goods1用）
					var tag6 = _data.tag['tag_6（グッズ1）'] || '';
					// tag 7（Goods2用）
					var tag7 = _data.tag['tag_7（グッズ2）'] || '';
					//メニュー画像1 画像パス
					var ImgSrc01Text = _data?.images_1?.path || '';
					//メニュー画像1 画像キャプション(altと同じ)
					var ImgCaption01Txt = _data?.images_1?.caption || '';
					// メニュー画像2 画像パス
					var ImgSrc02Text = _data?.images_2?.path || '';
					// メニュー画像2 画像キャプション(altと同じ)
					var ImgCaption02Txt = _data?.images_2?.caption || '';
					// メニュー画像3 画像パス
					var ImgSrc03Text = _data?.images_3?.path || '';
					// メニュー画像3 画像キャプション(altと同じ)
					var ImgCaption03Txt = _data?.images_3?.caption || '';
					//メニュー01 メニュー名
					var Menu01Text = _data?.menu_1?.menu || '';
					//メニュー01 価格
					var Menu01Price = _data?.menu_1?.price || '';
					// メニュー02 メニュー名
					var Menu02Text = _data?.menu_2?.menu || '';
					//メニュー02 価格
					var Menu02Price = _data?.menu_2?.price || '';
					//URL
					var url = _data?.Link?.url || '';
					//リンクテキスト
					var linkTxt = _data?.Link?.link_text || '';

					if(ImgSrc02Text !== "") {
						$(id).addClass('clms');
					}

					shopHtml += '<li class="item">';
					shopHtml += '<div class="item__in">';

					shopHtml += '<div class="item__title">';
						shopHtml += '<span class="item__shopNum">' + shopNum + '</span>';
						shopHtml += '<h4 class="item__ttl"><span>'+ shopTtl +'</span></h4>';
					shopHtml += '</div>';

					if(dir === 'goods') {
						//画像
						if(ImgSrc02Text !== "") {
							shopHtml += '<div class="item__ims">';
								shopHtml += '<div class="item__im"><img src="./assets/img/menu/'+ dir +'/'+ ImgSrc01Text +'" alt="'+ ImgCaption01Txt +'">';
								if(ImgCaption01Txt !== "") {
									shopHtml += '<p>' + ImgCaption01Txt + '</p>';
								}

								// タグ
								if(tag6 !=="") {
									shopHtml += '<div class="item__tag">';
									shopHtml += '<p class="item__tag6"><i>'+ tag6 +'</i></p>';
									shopHtml += '</div>';
								}

								shopHtml += '</div>';
								shopHtml += '<div class="item__im"><img src="./assets/img/menu/'+ dir +'/'+ ImgSrc02Text +'" alt="'+ ImgCaption02Txt +'">';
								if(ImgCaption02Txt !== "") {
									shopHtml += '<p>' + ImgCaption02Txt + '</p>';
								}

								// タグ
								if(tag7 !=="") {
									shopHtml += '<div class="item__tag">';
									shopHtml += '<p class="item__tag7"><i>'+ tag7 +'</i></p>';;
									shopHtml += '</div>';
								}

								shopHtml += '</div>';
							shopHtml += '</div>';
						} else {
							shopHtml += '<div class="item__im"><img src="./assets/img/menu/'+ dir +'/'+ ImgSrc01Text +'" alt="'+ ImgCaption01Txt +'">';
							if(ImgCaption01Txt !== "") {
								shopHtml += '<p>' + ImgCaption01Txt + '</p>';
							}
							// タグ
							if(tag6 !=="") {
								shopHtml += '<div class="item__tag">';
								shopHtml += '<p class="item__tag6"><i>'+ tag6 +'</i></p>';
								shopHtml += '</div>';
							}
							shopHtml += '</div>';
						}

						// メニュー
						if(Menu01Text !== "") {
							// メニュー1
							shopHtml += '<div class="item__cont">';
								shopHtml += '<div class="item__cont-inner">'
								shopHtml += '<h5 class="item__ttlsub">'+ Menu01Text +'</h5>';
								shopHtml += '<p class="item__txt">' + Menu01Price +'</p>';
								shopHtml += '</div>';
								// メニュー2
								if(Menu02Text !== "") {
									shopHtml += '<div class="item__cont-inner">'
									shopHtml += '<h5 class="item__ttlsub">'+ Menu02Text +'</h5> ';
									shopHtml += '<p class="item__txt">' + Menu02Price +'</p>';
									shopHtml += '</div>';
								}
							shopHtml += '</div>';
						}
					} else {
						//画像
						if(ImgSrc02Text !== "") {
							shopHtml += '<div class="item__ims">';
								shopHtml += '<div class="item__im"><img src="./assets/img/menu/'+ dir +'/'+ ImgSrc01Text +'" alt="'+ ImgCaption01Txt +'">';
								if(ImgCaption01Txt !== "") {
									shopHtml += '<p>' + ImgCaption01Txt + '</p>';
								}
								shopHtml += '</div>';
								shopHtml += '<div class="item__im"><img src="./assets/img/menu/'+ dir +'/'+ ImgSrc02Text +'" alt="'+ ImgCaption02Txt +'">';
								if(ImgCaption02Txt !== "") {
									shopHtml += '<p>' + ImgCaption02Txt + '</p>';
								}
								shopHtml += '</div>';
							shopHtml += '</div>';
						} else {
							shopHtml += '<div class="item__im"><img src="./assets/img/menu/'+ dir +'/'+ ImgSrc01Text +'" alt="'+ ImgCaption01Txt +'">';
							if(ImgCaption01Txt !== "") {
								shopHtml += '<p>' + ImgCaption01Txt + '</p>';
							}
							shopHtml += '</div>';
						}

						// タグ
						if(tag1 !== "" || tag2 !== "" || tag3 !=="" || tag4 !== "" || tag5 !=="" || tag6 !=="") {
							shopHtml += '<div class="item__tag"><div class="item__tag-inner">';
								// ビール用1
								if(tag1 !== "") {
										shopHtml += '<p class="item__tag1"><i>'+ tag1 +'</i></p>';
									}
								// ビール用2
								if(tag2 !== "") {
									shopHtml += '<p class="item__tag2"><i>'+ tag2 +'</i></p>';
								}
								// ビール用3
								if(tag3 !== "") {
									shopHtml += '<p class="item__tag3"><i>'+ tag3 +'</i></p>';
								}
								// ビール用4
								if(tag4 !== "") {
									shopHtml += '<p class="item__tag4"><i>'+ tag4 +'</i></p>';
								}
							shopHtml += '</div>';
							// フード用
							if(tag5 !== "") {
								shopHtml += '<div class="item__tag-inner">';
								shopHtml += '<p class="item__tag5"><i>'+ tag5 +'</i></p>';
								shopHtml += '</div>';
							}
							shopHtml += '</div>';
						}

						// メニュー
						if(Menu01Text !== "") {
							// メニュー1
							shopHtml += '<div class="item__cont">';
								shopHtml += '<div class="item__cont-inner">'
								shopHtml += '<h5 class="item__ttlsub">'+ Menu01Text +'</h5>';
								shopHtml += '<p class="item__txt">' + Menu01Price +'</p>';
								shopHtml += '</div>';
								// メニュー2
								if(Menu02Text !== "") {
									shopHtml += '<div class="item__cont-inner">'
									shopHtml += '<h5 class="item__ttlsub">'+ Menu02Text +'</h5> ';
									shopHtml += '<p class="item__txt">' + Menu02Price +'</p>';
									shopHtml += '</div>';
								}
							shopHtml += '</div>';
						}

						//別日程の出店
						// if(tag3 !== "") {
						// 	shopHtml += '<span class="item__ico">'+ tag3 +'</span>';
						// }
					}

					//リンク処理
					if(url !== "") {
						shopHtml += '<div class="item__to"><a href="'+ url +'" target="_blank""><span>'+ linkTxt +'</span></a></div>';
					}

					shopHtml += '</div>';
					shopHtml += '</li>';

				}
				$(id).html(shopHtml);

			}).fail(function() {
				$(id).append('<p>データをうまく読み込めませんでした</p>');
			});
	}

	set_map_info('beer_info','#js-beer1-data');
	set_map_info('beer_garden_info','#js-beer2-data');
	// set_map_info('hofbrau_booth_info','#js-beer3-data');
	set_map_info('goods_info','#js-goods-data');
});
