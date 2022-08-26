const omikuziList = {
    images:[
        'dance_yorokobi_mai_woman.png',
        'money_megakuramu_man.png',
        'pose_dance_ukareru_woman.png',
        'pose_dance_ukareru_man.png',
        'pose_genki09_businessman.png',
        'pose_anshin_woman.png',
        'businessman1_nayami.png',
        'sweets_wataame_girl2.png',
        'sick_kaoiro_man.png',
        'kaji_kagamu_woman.png',
        'pose_ochikomu_businessman.png',
        'food_spaghetti_neapolitan.png',
    ],
    result:[
        "大吉",
        "吉",
        "中吉",
        "小吉",
        "末吉",
        "凶",
    ],
    advice:[
        'リリースしたソフトウェアにバグが見つかりますが、再現性が低いためユーザーも上司も誰ひとり気付かないでしょう。見なかったことにするのが吉。',
        'GitHub Sponsors を通じて太っ腹なスポンサーがつきます。これであなたの OSS 開発は安泰です!!',
        'リリースしたソフトウェアにバグが見つかりますが、幸いユーザー企業のお偉方は極度のITオンチです。仕様で押し通すのが吉。',
        'リファクタリングに成功してプログラムが爆速に!!サクサク動いて気持ちいいーーー!!',
        'リリースしたソフトウェアに深刻なバグが見つかりますが、口八丁な営業のお陰で事無きを得るでしょう。ただし、後日それを理由に無茶振りされるおそれがあるので油断は禁物です。',
        'git でコンフリクトが発生します!! が、今回は上手く解消できるでしょう。今回は・・・',
        'リリース前のソフトウェアにバグが見つかります。貴方のお勤め先が上流の企業ならばそれほど大きな問題にはなりませんが、三次請けよりも下流の場合はご愁傷様でございます。',
        '開発の要件定義が綿飴のようにふわっふわです。手遅れにならないうちに手を打っておくのが吉。',
        'リリース直前に致命的なバグが見つかるでしょう。お泊まりの準備をして出社するのが吉。',
        '関わっているプロジェクトから何だか香ばしい匂いがします。炎上する前になんとか逃げるのが吉。',
        'リリースしたソフトウェアに致命的な欠陥が見つかり、それが原因で顧客の機密情報が派手に流出します。仕様で押し通すにはいささか無理がありますので、潔く腹をくくりましょう。',
        '前任者から引き継いだコードがスパゲティ状態です。残念ながらあなたの力ではどうにもならないので、せめて自分はこんなコードを書かないように今後の糧にしましょう。',
    ],
    language:[
        'C++',
        'Java',
        'Python',
        'PHP',
        'TypeScript',
        'Ruby',
        'C♯',
        'JavaScript',
    ],
    db:[
        'Oracle Database',
        'SQL Server',
        'DB2',
        'PostgreSQL',
        'MySQL',
    ],
    editor:[
        'Emacs',
        'Vim',
        'Atom',
        'nano',
        'Visual Studio Code',

    ],
}

config = {
    topPage: document.getElementById("toppage"),
    omikuzi: document.getElementById("omikuzi"),
}

// テストケース
omikuzi = {
    images:'https://acha0203.github.io/SW_Dev_Omikuji/images/kaji_kagamu_woman.png',
    result:"吉",
    advice:'GitHub Sponsors を通じて太っ腹なスポンサーがつきます。これであなたの OSS 開発は安泰です!!',
    language:'JavaScript',
    db:'MySQL',
    editor:'Visual Studio Code',
}

// 「おみくじを引く」ボタンにイベント追加
config.topPage.querySelector("button").addEventListener("click", () => {
    // const omikuzi = 
    createOmikuzi(omikuzi);
});

// おみくじ結果表示
function createOmikuzi(array) {
    config.topPage.classList.add("d-none");
    config.omikuzi.innerHTML = `
        <div class="vh-100 d-flex align-items-center">
            <div class="container d-flex flex-column justify-content-start align-items-center text-danger">
                <div class="box bg-white mb-3 d-flex flex-column align-items-center py-3 my-4">
                    <div class="block text-center px-3 mb-4"><h5 class="pb-2">ソフトウェア開発みくじ</h5></div>
                    <div class="block text-center mb-4">
                        <div><img class="img-fluid" src="${array.images}"></div>
                        <div><p class="result mb-0">${array.result}</p></div>
                    </div>
                    <div class="block px-3 mb-4 mx-auto">
                        <p class="fs-2">${array.advice}</p>
                    </div>
                    <div class="block text-center px-3 mb-4">
                        <p>✿ ラッキー言語 ✿</p>
                        <p class="lucky-p">${array.language}</p>
                    </div>
                    <div class="block text-center px-3 mb-4">
                        <p>✿ ラッキーデータベース ✿</p>
                        <p class="lucky-p">${array.db}</p>
                    </div>
                    <div class="text-center px-3 mb-2">
                        <p>✿ ラッキーエディタ ✿</p>
                        <p class="lucky-p">${array.editor}</p>
                    </div>
                    <button class="btn btn-danger rounded-pill">もう一度おみくじを引く</button>
                </div>
            </div>
        </div>
    `;
    // 「もう一度おみくじを引く」ボタンにイベント追加
    config.omikuzi.querySelector("button").addEventListener("click", () => {
        config.omikuzi.innerHTML = "";
        config.topPage.classList.remove("d-none");
    });
}