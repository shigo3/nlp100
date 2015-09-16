// 05.n-gram
// 与えられたシーケンス（文字列やリストなど）からn-gramを作る関数を作成せよ．この関数を用い，"I am an NLPer"という文から単語bi-gram，文字bi-gramを得よ．

/**
 * @param {string|array} s 対象文字列
 * @param {number} n 結合数
 * @param {string} unit 単位
 */
function nGram(s, n, unit) {
    var tokens;
    if (unit === 'word') {
        // 単語Nグラム
        tokens = Array.isArray(s)? s : s.split(' ');
    } else if (unit === 'char') {
        // 文字Nグラム
        // whitespaceは一文字と見なさいことにする
        if (Array.isArray(s)) {
            tokens = s.map((c) => {
                return c.replace(/ /g, '');
            });
        } else {
            tokens = s.replace(/ /g, '').split('');
        }
    } else {
        return;
    }

    var nseq = [];
    for (var i = 0; i < tokens.length + 1 - n; i++) {
        var seq = [];
        for (var j = 0; j < n; j++) {
            seq.push(tokens[i + j]);
        }
        nseq.push(seq);
    }
    return nseq; 
}


var str = 'I am an NLPer';
console.log(nGram(str, 2, 'word'));
console.log(nGram(str, 2, 'char'));
