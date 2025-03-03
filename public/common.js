
const scroll_to_top_btn = document.querySelector("button.arrow");
const menu = document.querySelector("#navbarNav > ul > li.nav-item.dropdown > a");
const down = document.querySelector("#down");
let btn = document.querySelector(".toggle-btn");
let navbar = document.querySelector("#navbarNav");
let nav = document.querySelector(".navbar-toggler");
let body =document.querySelector("body");
const loading = document.querySelector('.loading');



menu.addEventListener('click', () => {
	down.classList.toggle('open');

});
menu.addEventListener('blur', () => {
	down.classList.remove('open');

});

//クリックイベントを追加
scroll_to_top_btn.addEventListener('click', scroll_to_top);

function scroll_to_top() {
	window.scroll({ top: 0, behavior: 'smooth' });
};


//クリックイベントを追加

function scroll_to_top() {
	window.scroll({ top: 0, behavior: 'smooth' });
};


//スクロール時のイベントを追加
window.addEventListener('scroll', scroll_event);

function scroll_event() {

	if (window.pageYOffset > 400) {
		scroll_to_top_btn.style.opacity = '1';
	} else if (window.pageYOffset < 400) {
		scroll_to_top_btn.style.opacity = '0';
	}

};



btn.addEventListener('click', () => {
	nav.classList.toggle('collapsed');

});

window.addEventListener('click', function() {
	//bodyタグを取得
	let obj = document.querySelector("body");
	//bodyタグにクリックイベントを無効化するstyleを追加
	obj.setAttribute("style", "pointer-events: none;");
	//5秒後に追加したstyleを削除
	setTimeout(function() {
		obj.setAttribute("style", "")
	}, "400");
});

window.addEventListener('load', () => {
	loading.classList.add('hide');
}, false);

ityped.init(document.querySelector("#hello h2"), {
	strings: ['Welcome to Ambitech.'],
	startDelay: 1500, 
	typeSpeed:  150,            
	  backSpeed:  100,
	  showCursor: false,  
	  backDelay:  7000
	  
});

ityped.init(document.querySelector("#hello h3"), {
	strings: ['我々は豊かな発想力と確かな技術力で情報化社会に貢献します。'],
	startDelay: 4500,   
	typeSpeed:  100,            
	  backSpeed:  100,
	  showCursor: false,  
	  backDelay:  3000
	  
});

ityped.init(document.querySelector("#hello p"), {
	strings: ['	We will contribute to the information society with our rich imagination and solid technical capabilities.'],
	startDelay: 4500,   
	typeSpeed:  29,            
	  backSpeed:  29,
	  showCursor: false,  
	  backDelay:  3000
	  
});


//ScrollReveal({
//       reset: true,
//       distance: "60px",
//       duration: 800, //2sかけてアニメーション
//       delay: 100 /* 0.2s後に発動 */,
//     });
//
//     ScrollReveal().reveal(".main-title, .section-title", {
//       delay: 200,
//       origin: "left",
//     });
//     ScrollReveal().reveal(".sec-01 .image, .info", {
//       delay: 600,
//       origin: "bottom",
//     });
//     ScrollReveal().reveal(".text-box", {
//       delay: 700,
//       origin: "right",
//     });
//     ScrollReveal().reveal(".media-icons i", {
//       delay: 500,
//       origin: "bottom",
//       interval: 200,
//     });
//     ScrollReveal().reveal(".sec-02 .image, .sec-03 .image", {
//       delay: 500,
//       origin: "top",
//     });
//     ScrollReveal().reveal(".media-info li", {
//       delay: 500,
//       origin: "left",
//       interval: 50,
//     });
//
//	 
//	 let imagesItems = [...document.querySelectorAll(".img-wrapB")]; //nodelistではなく、配列で取得できる
//	 // console.log(imagesItems);
//	 let titles = [...document.querySelectorAll("h2")];
//	 let titleMessage = document.querySelector(".title");
//
//	 //具体的にいつ発動させるのかを決めるオプション
//	 let options = {
//	   rootMargin: "0px", //デフォルトで０.marginとほぼ同じ。
//	   threshold: 0.2, //閾値は0.2。これが１になると完全に画面におさまってから発動する
//	 };
//
//	 //ある特定の位置を超えると作動する関数
//	 let setItemActive = (entries) => {
//	   console.log(entries);
//	   entries.map((entry) => {
//	     //mapは返り値を持つ（新しく配列を生成する）、forEachは返り値を持たない。
//	     // console.log(entry.isIntersecting);
//	     if (entry.isIntersecting) {
//	       entry.target.classList.add("active");
//	     } else {
//	       entry.target.classList.remove("active");
//	     }
//	   });
//	 };
//
//	 let observer = new IntersectionObserver(setItemActive, options); //交差の監視して、閾値を過ぎたらコールバック関数が呼ばれる
//
//	 //img-wrapは偶数と奇数で出現する場所が違う。という処理。
//	 imagesItems.map((item, index) => {
//	   console.log(item, index);
//	   //jsで楽にcssつけてるだけ。手動で１つずつつけても良い。でも要素名を変更するのが面倒臭いからこうしてる。
//	   item.children[0].style.backgroundImage = `url(img/${index + 1}.jpg)`;
//	   index % 2 == 0 ? (item.style.left = "55%") : (item.style.left = "5%");
//	   //
//	   observer.observe(item); //itemを常に監視する。
//	 });
//
//	 titles.map((title, index) => {
//	   index % 2 == 0 ? (title.style.left = "45%") : (title.style.left = "35%");
//	   observer.observe(title);
//	 });
//
//	 observer.observe(titleMessage);
//
//
//


