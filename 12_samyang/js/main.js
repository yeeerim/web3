$(function(){
    $(".gnb").mouseenter(function(){
        $("header").stop().animate({"height":486},400)
        $("header").css("border-bottom", "1px solid #888")
        $(".depth2").stop().slideDown(400);
    });
    $("header").mouseleave(function(){
        $("header").stop().animate({"height":141},400)
        $("header").css("border-bottom", "none")
        $(".depth2").stop().slideUp(100);
    });
    $(".util>li:last-child").click(function(){
        $(".lang").slideToggle(300);
    })
    $(".util>li:last-child").mouseleave(function(){
        $(".lang").slideUp(400);
    })

    $(".btn").click(function(){
        $(".list").slideToggle(300);
    });
    $(".btn").mouseleave(function(){
        $(".list").slideUp(400);
    });


    // 슬라이드 스크립트
    $('.visual').slick({
        // 슬라이드 자동실행
        autoplay: true,
        // 페이지버튼
        dots:true
      });
    // product-new
    $('.new_list').slick({
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll:1,
        infinite: true,
        arrows: false,
        dots:true
    });  

    // list tab
    $(".slide_list:gt(0)").hide();
    $(".list li").click(function(e){
        // 하이퍼링크(#) 상단이동 하지 않게 하는 함수
        e.preventDefault();
        $(".list li").removeClass("on")
        $(this).addClass("on")
        // index값 알아내기
        let num = $(this).index();
        console.log(num);
        $(".slide_list").hide();
        $(".slide_list").eq(num).show();
    });

    $('.slide_list').slick({
        autoplay: true,
        slidesToShow: 7,
        slidesToScroll:1,
        infinite: false,
        arrows: false,
        dots:true,
        variableWidth:true
    });
    

    // 사이드 바
    var currentPosition = parseInt($(".side_bar").css("top"));
    $(window).scroll(function(){
        var position = $(window).scrollTop();
        $(".side_bar").stop().animate({"top":position+currentPosition +"px"},500);
    });

})