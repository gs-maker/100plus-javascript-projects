const quizData = [
	{
		question: "Which language runs in a web browser?",
		a: "Java",
		b: "C",
		c: "Python",
		d: "JavaScript",
		correct: "d",
	},
	{
		question: "What does CSS stand for?",
		a: "Central Style Sheets",
		b: "Cascading Style Sheets",
		c: "Cascading Simple Sheets",
		d: "Cars SUVs Sailboats",
		correct: "b",
	},
	{
		question: "What does HTML stand for?",
		a: "Hypertext Markup Language",
		b: "Hypertext Markdown Language",
		c: "Hyperloop Machine Language",
		d: "Helicopters Terminals Motorboats Lamborginis",
		correct: "a",
	},
	{
		question: "What year was JavaScript launched?",
		a: "1996",
		b: "1995",
		c: "1994",
		d: "none of the above",
		correct: "b",
	},
];

// selectors
const quiz = document.getElementById("quiz");
const answersEl = document.querySelectorAll(".answer");
const questionsEl = document.getElementById("question");
const submitBtn = document.getElementById("submit");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");

let currentQuiz = 0;
let score = 0;
loadQuiz();

// functions
function loadQuiz() {
	deselectAnswers();
	const currentQuizData = quizData[currentQuiz];

	questionsEl.innerText = currentQuizData.question;
	a_text.innerText = currentQuizData.a;
	b_text.innerText = currentQuizData.b;
	c_text.innerText = currentQuizData.c;
	d_text.innerText = currentQuizData.d;
}

// deselect all
function deselectAnswers() {
	answersEl.forEach((answerEl) => {
		answerEl.checked = false;
	});
}

// get selected answer
function getSelected() {
	let answer;
	answersEl.forEach((answerEl) => {
		if (answerEl.checked) {
			answer = answerEl.id;
		}
	});
	return answer;
}

// event listeners
submitBtn.addEventListener("click", () => {
	const answer = getSelected();
	if (answer) {
		if (answer === answersEl.checked) {
			score++;
		}
		currentQuiz++;
		if (currentQuiz < quizData.length) {
			loadQuiz();
		} else {
			quiz.innerHTML = `
            <h3>You answered ${score}/${quizData.length} questions correctly</h3>
            <button onclick="location.reload()">Reload</button>
            `;
		}
	}
});