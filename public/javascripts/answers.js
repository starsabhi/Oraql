console.log("Hello from Answers JS")

// get edit form when clicking edit button
const editButtons = document.querySelectorAll('.editBtn');

for (let i = 0; i < editButtons.length; i++) {
    // console.log(editButtons[i]);
    editButtons[i].addEventListener('click', e => {
        const answerId = parseInt(e.target.id.split('-')[1], 10);
        console.log(answerId)
        const form = document.querySelector(`#edit-form-${answerId}`);
        const answerContent = document.querySelector("#answerDisplay");
        const editAnswerButton = document.querySelector(`#edit-${answerId}`);
        const deleteAnswerButton = document.querySelector(`#delete-${answerId}`);

        if (form.classList.contains("hidden")) {
            form.classList.remove("hidden");
            answerContent.classList.add("hidden");
            editAnswerButton.classList.add("hidden");
            deleteAnswerButton.classList.add("hidden");
        }

        const submitBtn = document.getElementById(`edit-submit-${answerId}`);

        submitBtn.addEventListener('click', async(submitEvent) => {
            submitEvent.preventDefault()
            const content = document.getElementById(`${answerId}-edit-content`).value

            // console.log(submitEvent.target.classList)
            const questionId = parseInt(
              submitEvent.target.classList[0].split('-')[1],
              10
            );
            console.log(questionId);

            const res = await fetch(`/questions/${questionId}/answers/${answerId}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    content
                })
            });

            const data = await res.json();
            if (data.message === 'Success') {
                const contentEle = document.getElementById(`answer-content-${answerId}`)
                contentEle.innerHTML = data.answer.content
                form.classList.add("hidden");
                answerContent.classList.remove("hidden");
                editAnswerButton.classList.remove("hidden");
                deleteAnswerButton.classList.remove("hidden");
            } else {
                if (data.message === 'Failure') {
                    const errorDiv = document.getElementById(`edit-errors-${answerId}`);
                    console.log(errorDiv)
                    errorDiv.innerHTML = data.errors[0];
                }
            }
        })
    })

}



//clicking cancel button: answerDisplay to appear, form disappear
//click submit button of the edit form
