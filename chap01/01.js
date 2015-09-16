// 01.「パタトクカシーー」
// 「パタトクカシーー」と言う文字列の1,3,5,7文字目を取り出して連結した文字列を得よ
var str = 'パタトクカシーー';
var answer = str.split('').filter((el, idx) => {
    return idx % 2 === 1;
}).join('');
console.log(answer);

