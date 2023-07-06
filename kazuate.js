// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

let b = document.querySelector('#print');
b.addEventListener('click', hantei);
// 入力回数（予想回数）
let kaisu = 0;

// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする
// hantei();
// hantei();
// hantei();
// hantei();

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  let i = document.querySelector('input[name="yosou"]');
  let yosou = Number(i.value);
  console.log('1回目の予想:' + yosou);
  
  // 課題3-1: 正解判定する
  kaisu++;
  if(kotae===yosou){
    kaisu==kaisu+5;
    console.log("正解です．おめでとう!");
  }else if(kotae>yosou){
    kaisu++;
    console.log("まちがい．答えはもっと大きいですよ");
  }else if(kotae<yosou){
    kaisu++;
    console.log("まちがい．答えはもっと小さいですよ");
  }

  if(kaisu===3){
    kaisu++;
    console.log("答えは " +kotae+ " でした．すでにゲームは終わっています");
  }
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール

}