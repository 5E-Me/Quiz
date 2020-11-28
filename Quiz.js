const quiz = [
    {
        question: "リベラルアーツ大学の学長の名前は？",
        answers: [
            "良学長",
            "亮学長",
            "涼学長",
            "両学長"
        ],
        correct: "両学長"
    }, {
        question: "お金にまつわる5つの力で間違っているものは？",
        answers: [
            "稼ぐ力",
            "守る力",
            "拾う力",
            "使う力"
        ],
        correct: "拾う力"
    }, {
        question: "賃貸契約時、不動産側の適正な仲介手数料金は？",
        answers: [
            "家賃0.25ヶ月分",
            "家賃0.5ヶ月分",
            "家賃1ヶ月分",
            "家賃2ヶ月分"
        ],
        correct: "家賃0.5ヶ月分"
    }
];
const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;


const $button = document.getElementsByTagName("button");
const buttonLength = $button.length;

// クイズの問題文、選択肢を定義
const setupQuiz = () => {
    document.getElementById("js-question").textContent = quiz[quizIndex].question;
    let buttonIndex = 0;
    while(buttonIndex < buttonLength){
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    }
}
setupQuiz();

const clickHandler = (e) => {
    if(quiz[quizIndex].correct === e.target.textContent){
        window.alert("正解!");
        score++;
    }else {
        window.alert("不正解!");
    }

    quizIndex++;

    if(quizIndex < quizLength){
        // 問題数がまだあればこちらを実行
        setupQuiz();
    }else{
        // 問題数がもうなければこちらを実行
        window.alert("終了!あなたの正解数は" + score + "/" + quizLength + "です!");
    }
};

// ボタンをクリックしたら正誤判定
let handlerIndex = 0;
while(handlerIndex < buttonLength){
    $button[handlerIndex].addEventListener("click", (e) => {
        clickHandler(e);
    });
    handlerIndex++;
}
