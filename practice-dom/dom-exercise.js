//// 注意: 以下は編集しないこと!
let data = [
	{name:'札幌', lat:43.06417, lng:141.34694},
	{name:'仙台', lat:38.26889, lng:140.87194},
	{name:'新宿', lat:35.68944, lng:139.69167},
	{name:'名古屋', lat:35.18028, lng:136.90667},
	{name:'大阪', lat:34.68639, lng:135.52},
	{name:'広島', lat:34.39639, lng:132.45944},
	{name:'高知', lat:33.55972, lng:133.53111},
	{name:'福岡', lat:33.60639, lng:130.41806},
	{name:'鹿児島', lat:31.56028, lng:130.55806},
	{name:'沖縄', lat:26.2125, lng:127.68111}
];
//// 注意: 以上は編集しないこと!

// 練習4-2 メッセージ追加プログラム
let h = document.querySelector('h2#ex42'); 
let pLink = document.createElement('p'); 
pLink.textContent = '写真表と都市の緯度経度のページです';
h.insertAdjacentElement('afterend', pLink);
// 練習4-3 写真表作成プログラム
let p = document.querySelector('div#phototable'); 
let img_element1 = document.createElement('p');
let img_element2 = document.createElement('p');
let img_element3 = document.createElement('p');
let s = document.createElement('img');
let t = document.createElement('img');
let u = document.createElement('img');
s.setAttribute('src', 'taro.png');
t.setAttribute('src', 'jiro.png');
u.setAttribute('src', 'hanako.png');
img_element1.insertAdjacentElement('beforeend', s);
p.insertAdjacentElement('beforeend', img_element1);
img_element2.insertAdjacentElement('beforeend', t);
p.insertAdjacentElement('beforeend', img_element2);
img_element3.insertAdjacentElement('beforeend', u);
p.insertAdjacentElement('beforeend', img_element3);
// 練習4-4 箇条書き削除プログラム
let li = document.querySelectorAll('ul#location > li'); 
for(let del of li){
	del.remove(); 
}
//練習4-5 箇条書き追加プログラム
let ul = document.querySelector('ul'); 
for (let element of data) {
	let kLink = document.createElement('li'); 
    kLink.textContent = element.name+"... 緯度:"+element.lat+",経度:"+element.lng;
	ul.insertAdjacentElement('beforeend', kLink);
} 
