//ローディング画面
$(window).on('load',function(){    
  $("#youtube-area").addClass('appear');
$("#loading").addClass('disappear');
});

//youtube API
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var ytPlayer;
function onYouTubeIframeAPIReady() {
ytPlayer = new YT.Player('youtube', {//動画を表示させたいIDを指定
videoId: 'FkZRG_b89hQ',//動画のアドレスの指定
playerVars: {
    playsinline: 1,// インライン再生を行う
    autoplay:1,//自動再生を行う
    fs:0,//全画面表示ボタンを表示しない    
    rel: 0,// 再生中の動画と同じチャンネルの関連動画を表示
    controls: 0,// プレーヤー コントロールを表示しない
    modestbranding: 1, // YouTubeロゴの非表示
    iv_load_policy: 3, // アノテーションの非表示
    start:165,//50秒後から動画がスタート
},    
events: {//イベント
    'onReady': onPlayerReady,
    'onStateChange': onPlayerStateChange
}
});
}

//ミュートにしてから再生する設定
function onPlayerReady(event) {
event.target.mute();
event.target.playVideo();
}


//ループ設定
function onPlayerStateChange(event) {
if (event.data == YT.PlayerState.ENDED) {
event.target.playVideo();
}
}

$('.slider-1').slick({
  arrows: false,//左右の矢印はなし
  autoplay: true,//自動的に動き出すか。初期値はfalse。
  autoplaySpeed: 0,//自動的に動き出す待ち時間。初期値は3000ですが今回の見せ方では0
  speed: 6900,//スライドのスピード。初期値は300。
  infinite: true,//スライドをループさせるかどうか。初期値はtrue。
  pauseOnHover: false,//オンマウスでスライドを一時停止させるかどうか。初期値はtrue。
  pauseOnFocus: false,//フォーカスした際にスライドを一時停止させるかどうか。初期値はtrue。
  cssEase: 'linear',//動き方。初期値はeaseですが、スムースな動きで見せたいのでlinear
  slidesToShow: 4,//スライドを画面に4枚見せる
  slidesToScroll: 1,//1回のスライドで動かす要素数
  responsive: [
    {
    breakpoint: 769,//モニターの横幅が769px以下の見せ方
    settings: {
      slidesToShow: 2,//スライドを画面に2枚見せる
    }
  },
  {
    breakpoint: 426,//モニターの横幅が426px以下の見せ方
    settings: {
      slidesToShow: 1.5,//スライドを画面に1.5枚見せる
    }
  }
]
});

