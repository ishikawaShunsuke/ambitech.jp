
const scroll_to_top_btn = document.querySelector("button.arrow");
const menu = document.querySelector("#navbarNav > ul > li.nav-item.dropdown > a");
const down = document.querySelector("#down");
const btn = document.querySelector('.toggle-btn');
let navbar = document.querySelector("#navbarNav");
let body =document.querySelector("body");
const loading = document.querySelector('.loading');
const nav = document.getElementById('navbarNav');
const toggler = document.querySelector('.navbar-toggler');

toggler.addEventListener('click', () => {
    const expanded = toggler.getAttribute('aria-expanded') === 'true';

    if (expanded) {
        // 開いた → ✖ にする
        btn.classList.add('open');
	} else {
        btn.classList.remove('open');
    }
});

document.addEventListener('click', (e) => {
    const expanded = toggler.getAttribute('aria-expanded') === 'true';
	// すでに閉じているなら何もしない
    if (!expanded) return;
    // クリックした場所がメニューでもトグルボタンでもない場合 → 閉じる
    if (!nav.contains(e.target) && !toggler.contains(e.target)) {
        const bsCollapse = new bootstrap.Collapse(nav, { toggle: false });
        bsCollapse.hide();
		btn.classList.remove('open');
    }
});

//クリックイベントを追加
scroll_to_top_btn.addEventListener('click', scroll_to_top);

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

window.addEventListener('load', () => {
	loading.classList.add('hide');
	loading.style.pointerEvents = 'none';
    loading.style.zIndex = '-1';
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
