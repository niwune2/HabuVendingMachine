class VendingMachine {
    constructor() {
        //
    }
}
// console.trace(); // スタックトレースを出力できる(呼び出し関係を把握しやすくする)
// console.count(''); // コードの呼び出し回数をカウントする

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
const rep1 = document.getElementById('rep01');
const rep2 = document.getElementById('rep02');
const rep3 = document.getElementById('rep03');
const log = document.getElementById('log');

wallet.value = "120";

price1.value = "test";
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
            button1.style.color = "White";
        }
    // }
});
