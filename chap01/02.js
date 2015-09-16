// 02. 「パトカー」＋「タクシー」＝「パタトクカシーー」
// 「パトカー」＋「タクシー」の文字を先頭から交互に連結して文字列「パタトクカシーー」を得よ．
var s1 = 'パトカー';
var s2 = 'タクシー';

var answer = '';
for (var i = 0; i < s1.length; i++) {
    answer += s1.charAt(i) + s2.charAt(i);
}
console.log(answer);

