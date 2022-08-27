let innerFlex = document.createElement("div");
innerFlex.classList.add("vh-100","d-flex","justify-content-center","align-items-center","flex-column");

let backGroundDiv = document.createElement("div");
backGroundDiv.classList.add("vh-100","d-flex", "justify-content-center","align-items-center","flex-column");
innerFlex.append(backGroundDiv);


//タイトル
let div = document.createElement("div");
div.classList.add("text-center");
backGroundDiv.append(div);

let title = document.createElement("h1");
title.classList.add("text-danger");
title.innerHTML = "ソフトウェア開発";

let title2 = document.createElement("h1");
title2.classList.add("text-danger");
title2.innerHTML = "みくじ";

const deco = document.createElement("h1");
deco.classList.add("mx-4", "result", "deco");
deco.innerHTML = "✿";

const titleWrapper = document.createElement("div");
titleWrapper.classList.add("d-flex", "justify-content-center", "align-items-center", "text-danger");
titleWrapper.innerHTML = `${deco.outerHTML}
    <div>${title.outerHTML}${title2.outerHTML}</div>
    ${deco.outerHTML}`;
div.append(titleWrapper);

window.addEventListener("resize", ()=> {
    const decos = document.querySelectorAll(".deco");
    if (window.innerWidth < 550) {
        for (const deco of decos) if (!deco.classList.contains("d-none")) deco.classList.add("d-none");
    }
    else {
        for (const deco of decos) if (deco.classList.contains("d-none")) deco.classList.remove("d-none");
    }
});

//画像
let picture = document.createElement("img");
picture.classList.add("light","m-4");
picture.src = "images/syougatsu2_omijikuji2.png";
div.append(picture);

//おみくじボタン
let div2 = document.createElement("div");
div2.classList.add("d-flex","justify-content-around","align-items-center","pt-3","pb-5");
backGroundDiv.append(div2);

let button = document.createElement("button");
button.classList.add("btn","btn-outline-white","rounded-pill","btn-danger");
button.innerText = "おみくじを引く";
div2.append(button);

//詳細情報 
let div3 = document.createElement("div");
div3.classList.add("d-flex","flex-column");
backGroundDiv.append(div3);

let info = document.createElement("div");
info.classList.add("text-danger");
info.innerHTML = `
    <a class="text-danger" href="about.html">このおみくじについて</a>
    ｜
    <a class="text-danger" href="developers.html">開発者一覧</a>`;
div3.append(info);

let div4 = document.createElement("div");
div4.classList.add("text-center");
backGroundDiv.append(div4)

let info2 = document.createElement("div");
info2.classList.add("text-danger")
info2.innerHTML = "🄫ソフトウェア開発みくじ";
div4.append(info2);


//結合
document.getElementById("toppage").append(innerFlex);
