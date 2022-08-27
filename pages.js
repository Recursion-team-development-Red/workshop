// "about.html" の内容
const aboutHtml = {
    title:"このおみくじについて",
    list:[
        `このおみくじは、コンピュータ・サイエンスの学習プラットフォーム <a href="https://recursionist.io/" target="blank">Recursion</a> で開催されているイベント「チーム開発体験会」の課題として制作されたものです。`,
        `あなたのソフトウェア開発の行方を占います。`,
        `「チーム開発体験会」が催される度におみくじの種類が増えてゆきますので、納得しかねるおみくじを引いてしまっても懲りずにまた引きに来るのが吉です。`,
    ]
}
// "developer.html" の内容
const developersHtml = {
    title:"開発者一覧",
    list:[
        `Naoto3`,
        `riku`,
        `Jy(yamada)`,
    ]
}

// "about.html", "developers.html" のひな型作成
function createOtherPages () {
    document.querySelector("body").innerHTML = `
    <div class="vw-100 vh-100 d-flex flex-column justify-content-center align-items-center text-danger">
        <div class="box bg-white mb-3 d-flex flex-column align-items-center p-3">
            <h4 class="mb-3"></h4>
            <ul class="mb-2"></ul>
        </div>
        <a href="index.html" class="mb-3"><button class="btn btn-danger rounded-pill">戻る</button></a>
        <footer>
            <p>🄫ソフトウェア開発みくじ</p>
        </footer>
    </div>
    `;
}
// "about.html", "developers.html" の内容反映
function setOtherPages (title, list) {
    createOtherPages();
    document.querySelector("title").innerHTML = title;
    document.querySelector("h4").innerHTML = title;
    const ul = document.querySelector("ul");
    for(const e of list){
        const li = document.createElement("li");
        li.classList.add("mb-2");
        li.innerHTML = e;
        ul.append(li);
    }
}

// url取得
const url = window.location.pathname.split('/').pop();

// 場合分けで"index.html" 以外のページを作成
switch (url) {
    case "about.html":
        setOtherPages(aboutHtml.title, aboutHtml.list);
        break;
    case "developers.html":
        setOtherPages(developersHtml.title, developersHtml.list);
        break;
}