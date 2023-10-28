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
const log = document.getElementById('log');

const cokePriceInput =
    document.querySelector('.price[data-product="coke"]');
const cokeButtonInput =
    document.querySelector('.button[data-product="coke"]');
const cokeStockInput =
    document.querySelector('.stock[data-product="coke"]');

cokePriceInput.value = '2345';
cokeButtonInput.value = 'a';
cokeStockInput.value = "9023";

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

cokeButtonInput.addEventListener('click', () => {
    // function clickBtn1() {
        //ボタンを無効化する関数
        if (cokeButtonInput.disabled === true) {
            // disabled属性を削除
            cokeButtonInput.removeAttribute("disabled");
            cokeButtonInput.style.color = "black";
        } else {
            // disabled属性を設定
            cokeButtonInput.setAttribute("disabled", true);
            cokeButtonInput.style.backgroundColor = "rgb(90,90,90)";
            cokeButtonInput.style.color = "rgb(255, 100, 100)";
        }
    // }
});
