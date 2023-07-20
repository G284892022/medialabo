let data = {
  "list": {
    "g1": [
      {
        "id": "2022030428673",
        "event_id": "28673",
        "start_time": "2022-03-04T04:35:00+09:00",
        "end_time": "2022-03-04T04:40:00+09:00",
        "area": {
          "id": "130",
          "name": "東京"
        },
        "service": {
          "id": "g1",
          "name": "ＮＨＫ総合１",
          "logo_s": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-100x50.png",
            "width": "100",
            "height": "50"
          },
          "logo_m": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-200x100.png",
            "width": "200",
            "height": "100"
          },
          "logo_l": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-200x200.png",
            "width": "200",
            "height": "200"
          }
        },
        "title": "みんなのうた「ごっつぉさま」／「超変身！ミネラルフォーマーズ」",
        "subtitle": "「ごっつぉさま」うた：須貝智郎／「超変身！ミネラルフォーマーズ」うた：鬼龍院翔ｆｒｏｍゴールデンボンバー",
        "content": "「ごっつぉさま」うた：須貝智郎／「超変身！ミネラルフォーマーズ」うた：鬼龍院翔ｆｒｏｍゴールデンボンバー",
        "act": "",
        "genres": [
          "0409",
          "0700",
          "0504"
        ]
      },
      {
        "id": "2022030427069",
        "event_id": "27069",
        "start_time": "2022-03-04T23:05:00+09:00",
        "end_time": "2022-03-04T23:10:00+09:00",
        "area": {
          "id": "130",
          "name": "東京"
        },
        "service": {
          "id": "g1",
          "name": "ＮＨＫ総合１",
          "logo_s": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-100x50.png",
            "width": "100",
            "height": "50"
          },
          "logo_m": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-200x100.png",
            "width": "200",
            "height": "100"
          },
          "logo_l": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-200x200.png",
            "width": "200",
            "height": "200"
          }
        },
        "title": "パラスポーツ×アニメ「アニ×パラ」▽パラアルペンスキーテーマ曲江口寿史×ＡＣＣ",
        "subtitle": "パラスポーツの魅力をアニメで伝える番組。高速滑走に挑む精神力が試されるパラアルペンスキーを描く。キャラ原案：江口寿史／曲：Ａｗｅｓｏｍｅ　Ｃｉｔｙ　Ｃｌｕｂ",
        "content": "パラスポーツの魅力をアニメで伝えるプロジェクトの第１３弾。圧倒的なスピードに挑む「パラアルペンスキー」の世界を江口寿史原案の魅力的なキャラクターで描く。平昌パラリンピック金メダリストの村岡桃佳選手への取材から生まれた主人公・桃は、スピードへの恐怖を克服していく。その壁を越えた先にあるものとは…　テーマ曲　♪「Ｏｎ　Ｙｏｕｒ　Ｍａｒｋ」はＡｗｅｓｏｍｅ　Ｃｉｔｙ　Ｃｌｕｂが手掛けた。",
        "act": "【声】松本まりか，【出演】Ａｗｅｓｏｍｅ　Ｃｉｔｙ　Ｃｌｕｂ，【監督】西村一彦，【脚本】加納新太，【原案】江口寿史",
        "genres": [
          "0700"
        ]
      }
    ]
  }
};

/////////////////// 課題3-2 はここから書き始めよう
console.log(data.list.g1[0].start_time);
console.log(data.list.g1[0].end_time);
console.log(data.list.g1[0].service.name);
console.log(data.list.g1[0].title);
console.log(data.list.g1[0].subtitle);
console.log(data.list.g1[0].content);
console.log(data.list.g1[0].act);
console.log(data.list.g1[1].start_time);
console.log(data.list.g1[1].end_time);
console.log(data.list.g1[1].service.name);
console.log(data.list.g1[1].title);
console.log(data.list.g1[1].subtitle);
// console.log(data.list.g1[1].content);
console.log(data.list.g1[1].act);
// 2. イベントハンドラの定義

// let b = document.querySelector('button#print');
// b.addEventListener('click', greeting);

// let suuji = document.createElement("p");
// function greeting() {
// 	let i = document.querySelector('input[name="shimei"]');
// 	let shimei = i.value;
//   if(shimei==="0409"||shimei=="音楽"){
//     suuji.textContent="みんなうた「ごっつぉさま」／「超変身！ミネラルフォーマーズ」";
//   }
//   if(shimei==="0100"||shimei=="スポーツ"){
//     suuji.textContent="パラスポーツ×アニメ3「アニ×パラ」▽パラアルペンスキーテーマ曲江口寿史×ＡＣＣ";
//   }
//   b.insertAdjacentElement("afterend",suuji);
// }
let b = document.querySelector('#print');
b.addEventListener('click', sendRequest);

// 通信を開始する処理
function sendRequest() {
  let rs = document.querySelectorAll('input[name="year"]');
  let urlhenkou;
	for (let r of rs) {
		if (r.checked) {		// r が選択されていたら
			//r.value;
      urlhenkou=r.value;
		}
	}
  let i = document.querySelector('input[name="shimei"]');
  let shimei = i.value;
  console.log(shimei);
    // URL を設定
    let url = 'https://www.nishita-lab.org/web-contents/jsons/nhk/g1-0000-j.json';
    url = 'https://www.nishita-lab.org/web-contents/jsons/nhk/'+urlhenkou+'-'+shimei+'-j.json';

    // 通信開始
    axios.get(url)
        .then(showResult)   // 通信成功
        //.catch(showError)   // 通信失敗
        //.then(finish);      // 通信の最後の処理
}

// 通信が成功した時の処理
function showResult(resp) {
    // サーバから送られてきたデータを出力
    let data = resp.data;

    // data が文字列型なら，オブジェクトに変換する
    if (typeof data === 'string') {
        data = JSON.parse(data);
    }

    // data をコンソールに出力
    console.log(data);

    // data.x を出力
    console.log(data.x);

    let ul = document.querySelector('td#siage');
    ul.textContent = data.list.g1[0].title;
    let kaisi = document.querySelector('td#kaisi');
    kaisi.textContent = data.list.g1[0].start_time;
    let owari = document.querySelector('td#owari');
    owari.textContent = data.list.g1[0].end_time;
    let kyoku = document.querySelector('td#kyoku');
    kyoku.textContent = data.list.g1[0].service.name;
    let sub = document.querySelector('td#sub');
    sub.textContent = data.list.g1[0].subtitle;
    let con = document.querySelector('td#con');
    con.textContent = data.list.g1[0].content;
    let act = document.querySelector('td#act');
    act.textContent = data.list.g1[0].act;
    // let ul = document.querySelector('ul'); 
    // let li = document.createElement('li');
    // li.textContent = data.list.g1[0].title;
    // ul.insertAdjacentElement('beforeend', li);
}

// 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}


// function printAnswer() {
// 	// name 属性が year の input 要素をすべて検索
// 	let rs = document.querySelectorAll('input[name="year"]');
//   let urlhenkou;
// 	for (let r of rs) {
// 		if (r.checked) {		// r が選択されていたら
// 			r.value;
//       urlhenkou=r.value;
// 		}
// 	}
//   url = 'https://www.nishita-lab.org/web-contents/jsons/nhk/'+ +'-'+urlhenkou+'-j.json';

// }