// JavaScript Document
//置頂下拉選單
var maxHeight = 400;

$(function(){

    $(".dropdown > li").hover(function() {
    
         var $container = $(this),
             $list = $container.find("ul"),
             $anchor = $container.find("a"),
             height = $list.height() * 1.1,       // make sure there is enough room at the bottom
             multiplier = height / maxHeight;     // needs to move faster if list is taller
        
        // need to save height here so it can revert on mouseout            
        $container.data("origHeight", $container.height());
        
        // so it can retain it's rollover color all the while the dropdown is open
        $anchor.addClass("hover");
        
        // make sure dropdown appears directly below parent list item    
        $list
            .show()
            .css({
                paddingTop: $container.data("origHeight")
            });
        
        // don't do any animation if list shorter than max
        if (multiplier > 1) {
            $container
                .css({
                    height: maxHeight,
                    overflow: "hidden"
                })
                .mousemove(function(e) {
                    var offset = $container.offset();
                    var relativeY = ((e.pageY - offset.top) * multiplier) - ($container.data("origHeight") * multiplier);
                    if (relativeY > $container.data("origHeight")) {
                        $list.css("top", -relativeY + $container.data("origHeight"));
                    };
                });
        }
        
    }, function() {
    
        var $el = $(this);
        
        // put things back to normal
        $el
            .height($(this).data("origHeight"))
            .find("ul")
            .css({ top: 0 })
            .hide()
            .end()
            .find("a")
            .removeClass("hover");
    
    });  
    
});



//輪播banner
	$(function(){
		// 先取得必要的元素並用 jQuery 包裝
		// 再來取得 $block 的高度及設定動畫時間
		var $block = $('#abgneBlock'),
			$slides = $('ul.list', $block),
			_width = $block.width(),
			$li = $('li', $slides),
			_animateSpeed = 250, 
			// 加入計時器, 輪播時間及控制開關
			timer, _showSpeed = 3000, _stop = false;

		// 產生 li 選項
		var _str = '';
		for(var i=0, j=$li.length;i<j;i++){
			// 每一個 li 都有自己的 className = playerControl_號碼
			_str += '<li class="playerControl_' + (i+1) + '"></li>';
		}

		// 產生 ul 並把 li 選項加到其中
		var $playerControl = $('<ul class="playerControl"></ul>').html(_str).appendTo($slides.parent()).css('left', function(){
			// 把 .playerControl 移到置中的位置
			//return (_width - $(this).width()) / 2;
		});
		
		// 幫 li 加上 click 事件
		var $playerControlLi = $playerControl.find('li').click(function(){
			var $this = $(this);
			$this.addClass('current').siblings('.current').removeClass('current');

			clearTimeout(timer);
			// 移動位置到相對應的號碼
			$slides.stop().animate({
				left: _width * $this.index() * -1
			}, _animateSpeed, function(){
				// 當廣告移動到正確位置後, 依判斷來啟動計時器
				if(!_stop) timer = setTimeout(move, _showSpeed);
			});

			return false;
		}).eq(0).click().end();

		// 如果滑鼠移入 $block 時
		$block.hover(function(){
			// 關閉開關及計時器
			_stop = true;
			clearTimeout(timer);
		}, function(){
			// 如果滑鼠移出 $block 時
			// 開啟開關及計時器
			_stop = false;
			timer = setTimeout(move, _showSpeed);
		});
		
		// 計時器使用
		function move(){
			var _index = $('.current').index();
			$playerControlLi.eq((_index + 1) % $playerControlLi.length).click();
		}
	});
	
//****左右兩側浮動廣告****//
function MM_showHideLayers() { //v9.0
  var i,p,v,obj,args=MM_showHideLayers.arguments;
  for (i=0; i<(args.length-2); i+=3) 
  with (document) if (getElementById && ((obj=getElementById(args[i]))!=null)) { v=args[i+2];
    if (obj.style) { obj=obj.style; v=(v=='show')?'visible':(v=='hide')?'hidden':v; }
    obj.visibility=v; }
}
//****側邊展開選單****//
	$(function()
	{
		// 幫 div.menu_item 加上 hover 及 click 事件
		// 同時把兄弟元素 div.menu_sub 隱藏起來
		$('#menuContent .left_menu_m ul li div.menu_item').hover(function(){
			//$(this).addClass('menu_item_on');
		}, function(){
			//$(this).removeClass('menu_item_on');
		}).click(function(){
			// 當點到標題時，若答案是隱藏時則顯示它；反之則隱藏
			$(this).addClass('menu_item_on');
			//alert('111');
			//$(this).siblings('div.menu_sub').removeClass('menu_item_on');
			//alert('222');
			var k = document.getElementsByClassName("menu_item");

			$(this).next('div.menu_sub').slideToggle();
			
			for (var i = 0 ; i < k.length ; i++)
			{
				if (k[i] != this)
				{
					$(k[i]).next('div.menu_sub').hide();
					$(k[i]).removeClass('menu_item_on');
				}
			}
		})/*.siblings('div.menu_sub').hide()*/;

		//讓第一個條目預設打開
		//$('#menuContent ul li div.menu_sub:eq(0)').show();
	});
	
	
//******//

//QA
	$(function(){
		// 幫 #qaContent 的 ul 子元素加上 .accordionPart
		// 接著再找出 li 中的第一個 div 子元素加上 .qa_title
		// 並幫其加上 hover 及 click 事件
		// 同時把兄弟元素加上 .qa_content 並隱藏起來
		$('#qaContent ul').addClass('accordionPart').find('li div:nth-child(1)').addClass('qa_title').hover(function(){
			$(this).addClass('qa_title_on');
		}, function(){
			$(this).removeClass('qa_title_on');
		}).click(function(){
			// 當點到標題時，若答案是隱藏時則顯示它，同時隱藏其它已經展開的項目
			// 反之則隱藏
			var $qa_content = $(this).next('div.qa_content');
			if(!$qa_content.is(':visible')){
				$('#qaContent ul li div.qa_content:visible').slideUp();
			}
			$qa_content.slideToggle();
		}).siblings().addClass('qa_content').hide();
	});

//	
/**
 * 缓慢到达指定标签
 * 
 * @param lable 指定标签的id
 * @returns {Boolean}
 */
function reachThisLable(lable, time) {
    if (!lable || !time) {
        return false;
    }
    
    $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');// 兼容 Opera,可以试试效果
    $body.animate({
        scrollTop: $('#'+lable).offset().top
    }, time);
    
    return false;// 返回false可以避免在原链接后加上#
}
//-->

function resizewindow(w,h){ 
window.resizeTo(w,h); 
} 
<!--abgne_float_ad-->
	// 當網頁載入完
	$(window).load(function(){
		var $win = $(window),
			$ad = $('#abgne_float_ad').css('opacity', 0).show(),	// 讓廣告區塊變透明且顯示出來
			_width = $ad.width(),
			_height = $ad.height(),
			_diffY = 40, _diffX = 15,	// 距離右及下方邊距
			_moveSpeed = 600;	// 移動的速度
		
		// 先把 #abgne_float_ad 移動到定點
		$ad.css({
			top: $(document).height(),
			left: $win.width() - _width - _diffX,
			opacity: 1
		});

		// 幫網頁加上 scroll 及 resize 事件
		$win.bind('scroll resize', function(){
			var $this = $(this);
			
			// 控制 #abgne_float_ad 的移動
			$ad.stop().animate({
				top: $this.scrollTop() + $this.height() - _height - _diffY,
				left: $this.scrollLeft() + $this.width() - _width - _diffX
			}, _moveSpeed);
		}).scroll();	// 觸發一次 scroll()
	});

//---->

//*******最新標籤******//
	$(function(){
		// 預設顯示第一個 Tab
		var _showTab = 0;
		var $defaultLi = $('ul.tabs li').eq(_showTab).addClass('active');
		$('.tab_content').eq($defaultLi.index()).siblings().hide();
		
		// 當 li 頁籤被點擊時...
		// 若要改成滑鼠移到 li 頁籤就切換時, 把 click 改成 mouseover
		$('ul.tabs li').mouseover(function() {
			// 找出 li 中的超連結 href(#id)
			var $this = $(this),
				_index = $this.index();
			// 把目前點擊到的 li 頁籤加上 .active
			// 並把兄弟元素中有 .active 的都移除 class
			$this.addClass('active').siblings('.active').removeClass('active');
			// 淡入相對應的內容並隱藏兄弟元素
			$('.tab_content').eq(_index).stop(false, true).fadeIn().siblings().hide();

			return false;
		}).find('a').focus(function(){
			this.blur();
		});
	});

//******排行榜標籤******//
/*
	$(function(){
		// 預設顯示第一個 Tab
		var _showTab = 0;
		var $defaultLi = $('ul.tabs_2 li').eq(_showTab).addClass('active');
		$('.tab_content_2').eq($defaultLi.index()).siblings().hide();
		
		// 當 li 頁籤被點擊時...
		// 若要改成滑鼠移到 li 頁籤就切換時, 把 click 改成 mouseover
		$('ul.tabs_2 li').mouseover(function() {
			// 找出 li 中的超連結 href(#id)
			var $this = $(this),
				_index = $this.index();
			// 把目前點擊到的 li 頁籤加上 .active
			// 並把兄弟元素中有 .active 的都移除 class
			$this.addClass('active').siblings('.active').removeClass('active');
			// 淡入相對應的內容並隱藏兄弟元素
			$('.tab_content_2').eq(_index).stop(false, true).fadeIn().siblings().hide();

			return false;
		}).find('a').focus(function(){
			this.blur();
		});
	});
*/

//******jp_marquee*******//
	$(function(){
		// 先取得 div#abgne_marquee ul
		// 接著把 ul 中的 li 項目再重覆加入 ul 中(等於有兩組內容)
		// 再來取得 div#abgne_marquee 的高來決定每次跑馬燈移動的距離
		// 設定跑馬燈移動的速度及輪播的速度
		var $marqueeUl = $('div#abgne_marquee ul'),
			$marqueeli = $marqueeUl.append($marqueeUl.html()).children(),
			_height = $('div#abgne_marquee').height() * -1,
			scrollSpeed = 600,
			timer,
			speed = 3000 + scrollSpeed,
			direction = 0,	// 0 表示往上, 1 表示往下
			_lock = false;

		// 先把 $marqueeli 移動到第二組
		$marqueeUl.css('top', $marqueeli.length / 2 * _height);
		
		// 幫左邊 $marqueeli 加上 hover 事件
		// 當滑鼠移入時停止計時器；反之則啟動
		$marqueeli.hover(function(){
			clearTimeout(timer);
		}, function(){
			timer = setTimeout(showad, speed);
		});

		// 判斷要往上還是往下
		$('div#abgne_marquee .marquee_btn').click(function(){
			if(_lock) return;
			clearTimeout(timer);
			direction = $(this).attr('id') == 'marquee_next_btn' ? 0 : 1;
			showad();
		});
		
		// 控制跑馬燈上下移動的處理函式
		function showad(){
			_lock = !_lock;
			var _now = $marqueeUl.position().top / _height;
			_now = (direction ? _now - 1 + $marqueeli.length : _now + 1)  % $marqueeli.length;
			
			// $marqueeUl 移動
			$marqueeUl.animate({
				top: _now * _height
			}, scrollSpeed, function(){
				// 如果已經移動到第二組時...則馬上把 top 設回到第一組的最後一筆
				// 藉此產生不間斷的輪播
				if(_now == $marqueeli.length - 1){
					$marqueeUl.css('top', $marqueeli.length / 2 * _height - _height);
				}else if(_now == 0){
					$marqueeUl.css('top', $marqueeli.length / 2 * _height);
				}
				_lock = !_lock;
			});
			
			// 再啟動計時器
			timer = setTimeout(showad, speed);
		}
		
		// 啟動計時器
		timer = setTimeout(showad, speed);

		$('a').focus(function(){
			this.blur();
		});

    $('.hot_slot_m_container ul li').each(function(i) {
      if( (i==0) || (i==7) ) return;
      $(this).find('a').css({"left":0,"top":0,"opacity":"0.5"});
      //$(this).find('#text').css({"opacity":"1"});
      $(this).find('#text').html("敬請期待");
      //$('.hot_slot_m_container ul li:eq(0) a').css({"left":"0","top":"0","opacity":"0.5"});
      //$('.hot_slot_m_container ul li:eq(0) a').css({"left":0,"top":0,"opacity":"0.5"});
    });


	});
	
/****水平跑馬燈******/
/*
function slideLine(box,box2,stf,delay,speed,w)
{
  var slideBox = document.getElementById(box);
  var slideBox2 = document.getElementById(box2);
  var delay = delay||1000,speed = speed||20,w = w||100;
  var tid = null,pause = false;
  var s = function(){tid=setInterval(slide, speed);}
  var slide = function(){
    if(pause) return;
    slideBox.scrollLeft += 1;
    if(slideBox.scrollLeft%w == 0){
      clearInterval(tid);
      slideBox2.appendChild(slideBox2.getElementsByTagName(stf)[0]);
      slideBox.scrollLeft = 0;
      setTimeout(s, delay);
    }
  }
  slideBox.onmouseover=function(){pause=true;}
  slideBox.onmouseout=function(){pause=false;}
  setTimeout(s, delay);
}
//網頁load完會執行一次
//五個屬性各別是：外面div的id名稱、包在裡面的標籤類型
//延遲毫秒數、速度、寬度
slideLine('annBox','annBox2','div',2000,25,120);
*/
/***********************/

var code;
function createCode() {
    code = "";
    var codeLength = 5; //驗證碼的長度
    var checkCode = document.getElementById("area_verifyimg");
    var codeChars = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 
    'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'); //所有候選組成驗證碼的字元，當然也可以用中文的
    for (var i = 0; i < codeLength; i++) 
    {
        var charNum = Math.floor(Math.random() * 52);
        code += codeChars[charNum];
    }
    if (checkCode) 
    {
        //checkCode.className = "code";
        checkCode.innerHTML = code;
    }
}
function validateCode()
{
    var inputCode = document.getElementById("input_captcha").value;
    if (inputCode.length <= 0) 
    {
        alert("請輸入驗證碼！");
        return false;
    }
    else if (inputCode.toUpperCase() != code.toUpperCase()) 
    {
        alert("驗證碼錯誤！");
        createCode();
        return false;
    }
    else 
    {
        //alert("驗證碼正確！");
        return true;
    }
}

function openDemo()
{
	//alert('input_account='+$("#input_account").val());
	//alert('input_password='+$("#input_password").val());
	var gbid=$("#input_account").val();
	var token=$("#input_password").val();
	if(!gbid) gbid="aid1";
	if(!token) token="aid2";
 	var url="demo.html?gbid="+gbid+"&token="+token;
 	//alert('url='+url);
  // Set the maximum width and height for this page
  var canvas = document.getElementById("canvas");
  var w = window.innerWidth;
  var h = window.innerHeight;

  window.open(url,'_blank','height='+h+',width='+w+',scrollbars=no,location=no,menubar=no,resizable=no');
}
