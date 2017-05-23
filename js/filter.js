$(function(){
	$('.more').siblings('.screening_list').addClass('hidden');
	/*获取data.json数据*/
			// $.getJSON('http://192.168.1.108:8000/data.json',function(response){
				$.getJSON('../data.json',function(response){
				// $.getJSON('http://10.120.37.245:8000/data.json',function(response){

					var data = response.goods;
					$.each(data, function(index,object){
						var description = object.description;
						var price = object.price;
						var comments = object.comments;
						var picture = object.picture;
						var text = "";
						text = "<div class='item'><div class='img_item'><a href='#'><img src='"+picture+"'></a></div><p class='changeLine'><a href='#'>"+description+"</a></p><p class='money'>￥"+price+"<a href='#'>"+comments+"</a><span>评论</span></p><p><a href='#' class='addCar'><i class='fa  fa-shopping-cart fa-xl'></i>加入购物车</a></p></div>";
						$('#products_list').append(text);
					});
					function paginator(){
						var count = $('#products_list').children('div .item').length;
						var totalPages = 0;
						if (count%12 == 0) {
							totalPages = count/ 12;
						}else{
							totalPages = Math.floor(count/ 12)+1;
						};
						/*分页插件*/
						$('#page').jqPaginator({
							totalPages: totalPages,
							visiblePages: 7,
							currentPage: 1,
							first: '<li class="first"><a href="javascript:void(0);">首页<\/a><\/li>',
							prev: '<li class="prev"><a href="javascript:void(0);">上一页<\/a><\/li>',
							next: '<li class="next"><a href="javascript:void(0);">下一页<\/a><\/li>',
							last: '<li class="last"><a href="javascript:void(0);">末页<\/a><\/li>',
							page: '<li class="page"><a href="javascript:void(0);">{{page}}<\/a><\/li>',
							onPageChange: function (n) {
								$('#products_list').children('div .item').hide();
								$('#products_list').children('div .item').slice((n-1)*12,(n-1)*12+12).show();

							}
						});
						$('#goodsNumber').html('共<em>'+count+'</em>件商品');
					}
					paginator();

					$('.addCar').on('click',function(){
						var num=$(".shopNum").text();
						num++;
						$(".shopNum").text(num);
					});
					/*符合筛选条件*/
					$('.screening_list a').on('click',function(){
					
						$('.products_list').empty();
						var itemId = $(this).attr('id');
						var filterId = $(this).parent().attr('id');
						$.each(data, function(index,object){
							if(itemId == object[filterId]){
								var description = object.description;
								var price = object.price;
								var comments = object.comments;
								var picture = object.picture;
								var text = "";
								text = "<div class='item'><div class='img_item'><a href='#'><img src='"+picture+"'></a></div><p class='changeLine'><a href='#'>"+description+"</a></p><p class='money'>￥"+price+"<a href='#'>"+comments+"</a><span>评论</span></p><p><a href='#' class='addCar'><i class='fa  fa-shopping-cart fa-xl'></i>加入购物车</a></p></div>";
								$('#products_list').append(text);
							}
						});
						paginator();
						$('.addCar').on('click',function(){
						var num=$(".shopNum").text();
						num++;
						$(".shopNum").text(num);
					});
					});
				});

			});

/*点击更多按钮显示更多筛选条件*/
$('.more').on('click',function(){
	if($(this).hasClass('off')){
		$(this).siblings('.screening_list').removeClass('hidden');
		$(this).html('收起<i class="fa fa-angle-up"></i>').removeClass('off');
	}else{
		$(this).siblings('.screening_list').addClass('hidden');
		$(this).html('更多<i class="fa fa-angle-down"></i>').addClass('off');
	}
});





          /* $.get('../data.json', function(data){
           	description = data.goods[0].description;
					var text = "";
               text = "<h6>"+description+"</h6>";
               $('#new').html(text);
               console.log(description);
           },'json');
         });*/


