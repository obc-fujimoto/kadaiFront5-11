//◆問題１

alert("こんにちは");

//◆問題２

document.getElementById('answerButton').addEventListener('click', function() {
   
    var input = document.getElementById('userInput').value;
    var result = document.getElementById('result');
    
    if (input === 'hello') {
        document.getElementById("result").style.color = "red";
        result.textContent = '正解';
    } else {
        document.getElementById("result").style.color = "blue";
        result.textContent = '不正解';
    }
});

//◆問題3

document.getElementById('checkButton').addEventListener('click', function() {

    var score = parseInt(document.getElementById('scoreInput').value);
    
    if (score === 100) {
        alert('満点！！');
    } else if (score >= 80) {
        alert('合格です');
    } else if (score <= 30) {
        alert('赤点です');
    } else {
        alert('不合格です');
    }
});

//◆問題4

document.getElementById('testButton').addEventListener('click', function() {

    var firstTestScore = parseInt(document.getElementById('firstTestScore').value);
    var finalTestScore = parseInt(document.getElementById('finalTestScore').value);

    if (firstTestScore >= 80 && finalTestScore >= 80) {
        alert('高評価');
    } else if (firstTestScore >= 80 || finalTestScore >= 80) {
        alert('まあまあ評価');
    }
});

//◆問題5

for (var i = 0; i <= 10; i++) {
    console.log(i);
}

//◆問題6

for (var i = 0; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i + " 偶数");
    } else {
        console.log(i + " 奇数");
    }
}

//◆問題7

var fruits = ['りんご', 'めろん', 'バナナ', 'スイカ'];

//◆問題8
fruits.push('桃');

console.log(fruits);

//◆問題9

let array = {name: "テスト太郎", address: "tokyo", hobby: "baseball"};

console.log(array.hobby);


//◆問題10
array.favorite_food = "hamburger";

console.log(array);
