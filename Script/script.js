class VendingMachine {
    constructor() {
        //
    }
}
// console.trace(); // スタックトレースを出力できる(呼び出し関係を把握しやすくする)
// console.count(''); // コードの呼び出し回数をカウントする

// 今後商品が増えることを見越して定数を減らす工夫を
const priceInputs = document.querySelectorAll('.price');
const wallet = document.getElementById('wallet');
const price1 = document.getElementById('price01');
const price2 = document.getElementById('price02');
const price3 = document.getElementById('price03');
const button2 = document.getElementById('button02');
const button1 = document.getElementById('button01');
const button3 = document.getElementById('button03');
const status1 = document.getElementById('status01');
const status2 = document.getElementById('status02');
const status3 = document.getElementById('status03');
const stock1 = document.getElementById('stock01');
const stock2 = document.getElementById('stock02');
const stock3 = document.getElementById('stock03');
const log = document.getElementById('log');

function moneyInWallet(max, min) {
    const random = Math.floor(Math.random() * (max - min + 1)) + min;
    wallet.value = random;
}
moneyInWallet(200,1500);

// 飲み物の情報を格納するオブジェクト
const products = {
    coke: { price: 120, stock: 20 },
    orange: { price: 140, stock: 20 },
    tea: { price: 150, stock: 10 }
};

// 商品の在庫を管理する関数
// 品切れ時には'SoldOut'を表示する
// またボタンを暗くする

// 購入ボタンを押すと商品の値段に応じて
// walletの残量と在庫の残量が減る

// 補充は(今は)個別にできるようにする
// 在庫の量をデフォルトに戻す
// 売上金を回収し、記録する

// class="price"を処理する
priceInputs.forEach((input,index) => {
    // priceオブジェクトの情報を
});

price1.value = "price";
status1.value = "Test";

button1.addEventListener('click', () => {
    // function clickBtn1() {
        //ボタンを無効化する関数
        if (button1.disabled === true) {
            // disabled属性を削除
            button1.removeAttribute("disabled");
            button1.style.color = "black";
        } else {
            // disabled属性を設定
            button1.setAttribute("disabled", true);
            button1.style.backgroundColor = "rgb(90,90,90)";
            button1.style.color = "rgb(255, 100, 100)";
        }
    // }
});
