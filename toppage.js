let innerFlex = document.createElement("div");
innerFlex.classList.add("vh-100","d-flex","justify-content-center","align-items-center","flex-column");

let backGroundDiv = document.createElement("div");
backGroundDiv.classList.add("vh-100","d-flex", "justify-content-center","align-items-center","flex-column");
innerFlex.append(backGroundDiv);


//タイトル
let div = document.createElement("div");
div.classList.add("text-center");
backGroundDiv.append(div)

let title = document.createElement("h1");
title.classList.add("text-danger");
title.innerHTML = "ソフトウェア開発";
div.append(title);

let title2 = document.createElement("h1");
title2.classList.add("text-danger");
title2.innerHTML = "みくじ";
div.append(title2);


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
info.classList.add("text-danger","yuji-syuku","middle-fon");
info.innerHTML = "このおみくじについて｜開発者一覧";
div3.append(info);

let div4 = document.createElement("div");
div4.classList.add("text-center");
backGroundDiv.append(div4)

let info2 = document.createElement("div");
info2.classList.add("text-danger","small-font")
info2.innerHTML = "＠ソフトウェア開発みくじ";
div4.append(info2);


//結合
document.getElementById("toppage").append(innerFlex);
