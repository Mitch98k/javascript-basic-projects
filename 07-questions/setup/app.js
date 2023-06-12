//using selectors inside the element
// traversing the dom

// select all questions
const questions = document.querySelectorAll('.question');

// select buttons in each question
questions.forEach(function (question) {
    const btn = question.querySelector('.question-btn');

    // add event listener to button
    btn.addEventListener('click', function () {

        // make open question hide when selecting new one.
        questions.forEach(function (item) {
            if (item !== question) {
                item.classList.remove('show-text');
            }
        });
        
        // switch question visibility back and forth
        question.classList.toggle('show-text');
    });
});
