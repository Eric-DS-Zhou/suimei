// ===== 沿用原来的图片数组 + currentIndex 结构 =====
const images = ["images/suimei1.jpg", "images/suimei2.jpg", "images/suimei3.jpg"];
const captions = ["岁美学堂 · 让兴趣点亮生活", "岁美旅学 · 发现旅途中的精彩", "岁美康养 · 拥抱每一天的活力"];
let currentIndex = 0;
const slideshow = document.getElementById("slideshow");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const slideDots = document.getElementById("slideDots");
const slideCaption = document.getElementById("slideCaption");

if (slideshow && prevBtn && nextBtn) {
    function showImage(index) {
        currentIndex = (index + images.length) % images.length;
        slideshow.src = images[currentIndex];
        slideshow.alt = captions[currentIndex] + "（设计示意图）";
        if (slideCaption) slideCaption.textContent = captions[currentIndex];
        if (slideDots) {
            slideDots.querySelectorAll("button").forEach((dot, i) => {
                dot.classList.toggle("active", i === currentIndex);
                dot.setAttribute("aria-current", i === currentIndex ? "true" : "false");
            });
        }
    }
    // 下一张：沿用你之前学过的取模运算
    function changeImage() { showImage(currentIndex + 1); }
    if (slideDots) {
        images.forEach((_, i) => {
            const dot = document.createElement("button");
            dot.type = "button";
            dot.className = "slide-dot";
            dot.setAttribute("aria-label", `切换到第 ${i + 1} 张`);
            dot.addEventListener("click", () => { showImage(i); restartAutoPlay(); });
            slideDots.appendChild(dot);
        });
    }
    let timer = null;
    function restartAutoPlay() {
        if (timer) clearInterval(timer);
        timer = setInterval(changeImage, 4000);
    }
    nextBtn.addEventListener("click", () => { changeImage(); restartAutoPlay(); });
    prevBtn.addEventListener("click", () => { showImage(currentIndex - 1); restartAutoPlay(); });
    showImage(0);
    restartAutoPlay();
    document.addEventListener("visibilitychange", () => {
        if (document.hidden && timer) { clearInterval(timer); timer = null; }
        else if (!document.hidden) restartAutoPlay();
    });
}

// 演示表单：只在页面显示预览提示，不向网络发送数据
const contactForm = document.getElementById("contactForm");
if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const name = document.getElementById("visitorName").value.trim();
        document.getElementById("formNotice").textContent = `谢谢，${name}！这是演示表单，留言没有发送。`;
    });
}
