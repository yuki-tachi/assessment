'use strict';
/**
 * 名前の文字列を渡すと診断結果を返す関数
 * @param {string} userName ユーザの名前
 * @return {string} 診断結果
 */
function assessment(userName) {
    let sumOfCharCode = 0;
    for (let i = 0; i < userName.length; i++) {
        sumOfCharCode = sumOfCharCode + userName.charCodeAt(i);
    }
    // 文字のコード番号の合計を回答の数で割って添字の数値を求める
    const index = sumOfCharCode % answers.length;
    const result = answers[index].replaceAll('###userName###', userName);
    return result;
}


function test() {
    console.assert(assessment('太郎') ===
        '太郎のいいところは決断力です。太郎がする決断にいつも助けられる人がいます。',
        '診断結果の文言の特定の部分を名前に置き換える処理が正しくありません。'
    );

    console.assert(
        assessment('次郎') ===
        '次郎のいいところは自制心です。やばいと思ったときにしっかりと衝動を抑えられる次郎が皆から評価されています。',
        '診断結果の文言の特定の部分を名前に置き換える処理が正しくありません。'
    );

    console.assert(
        assessment('花子') ===
        '花子のいいところはまなざしです。花子に見つめられた人は、気になって仕方がないでしょう。',
        '診断結果の文言の特定の部分を名前に置き換える処理が正しくありません。'
    );

    console.assert(assessment('太郎') === assessment('太郎'),
        '入力が同じ名前なら同じ診断結果を出力する処理が正しくありません。'
    );

    console.assert(assessment('次郎') === assessment('次郎'),
        '入力が同じ名前なら同じ診断結果を出力する処理が正しくありません。'
    );

    console.assert(assessment('花子') === assessment('花子'),
        '入力が同じ名前なら同じ診断結果を出力する処理が正しくありません。'
    );
}

test();
