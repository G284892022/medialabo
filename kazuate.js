// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);
let result =document.querySelector('p#result')
let num =document.querySelector('span#kaisu')
let ans = document.querySelector('span#answer')
let b = document.querySelector('#print');
b.addEventListener('click', hantei);
// 入力回数（予想回数）
let kaisu = 1;
// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  let i = document.querySelector('input[name="yosou"]');
  let yosou = Number(i.value);
  num.textContent=kaisu;
  ans.textContent=yosou;
  console.log(kaisu + '回目の予想:' + yosou);
  // 課題3-1: 正解判定する
  if(kotae===yosou){
    kaisu==kaisu+5;
    result.textContent="正解です．おめでとう!";
    console.log("正解です．おめでとう!");
  }else if(kotae>yosou){
    kaisu++;
    result.textContent="まちがい．答えはもっと大きいですよ";
    console.log("まちがい．答えはもっと大きいですよ");
  }else if(kotae<yosou){
    kaisu++;
    result.textContent="まちがい．答えはもっと小さいですよ";
    console.log("まちがい．答えはもっと小さいですよ");
  }

  if(kaisu===5){
    kaisu++;
    result.textContent="答えは " +kotae+ " でした．すでにゲームは終わっています";
    console.log("答えは " +kotae+ " でした．すでにゲームは終わっています");
  }
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール

}