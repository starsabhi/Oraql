console.log("Hello from Answers JS")

// get edit form when clicking edit button
const editButtons = document.querySelectorAll('.editAnsBtn');

for (let i = 0; i < editButtons.length; i++) {
    const answerId = parseInt(editButtons[i].id.split('-')[1], 10);
    const originalAns = document.getElementById(`answer-content-${answerId}`);
    const content = document.getElementById(`${answerId}-edit-content`);
    const form = document.querySelector(`#edit-form-${answerId}`);
    const answerContent = document.querySelector(`#answerDisplay-${answerId}`);
    const editAnswerButton = document.querySelector(`#edit-${answerId}`);
    const deleteAnswerButton = document.querySelector(`#delete-${answerId}`);

    // console.log("originalAns",originalAns.innerHTML)
    // console.log(editButtons[i]);
    editButtons[i].addEventListener('click', e => {
        // content.textContent = originalAns.innerHTML;
        content.value = originalAns.innerHTML;
        console.log("new content Value", content.value)
        // console.log("Original HTML",originalAns.innerHTML)
        // console.log(e);
        // console.log(answerId)


        if (form.classList.contains("hidden")) {
            form.classList.remove("hidden");
            answerContent.classList.add("hidden");
            editAnswerButton.classList.add("hidden");
            deleteAnswerButton.classList.add("hidden");
        }

        const submitBtn = document.getElementById(`edit-submit-${answerId}`);

        submitBtn.addEventListener('click', async(submitEvent) => {
            submitEvent.preventDefault()
            const contentValue = document.getElementById(`${answerId}-edit-content`).value

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
                    content: contentValue
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


        const cancelBtn = document.querySelector(`#edit-cancel-${answerId}`);
        cancelBtn.addEventListener('click', (event)=> {
            event.preventDefault();
            event.stopPropagation();
            form.classList.add('hidden')
            answerContent.classList.remove("hidden");
            editAnswerButton.classList.remove("hidden");
            deleteAnswerButton.classList.remove("hidden");
            // const content = document.getElementById(`${answerId}-edit-content`);
            // console.log("Inner HTML", content.innerHTML)
            // content.innerHTML = originalAns.innerHTML
        })

    })
}




//clicking cancel button: answerDisplay to appear, form disappear
//click submit button of the edit form



///Clicking Delete button
const deleteBtns = document.querySelectorAll(".deleteAnsBtn");

for (let i = 0; i < deleteBtns.length; i++) {
    const answerId = parseInt(deleteBtns[i].id.split('-')[1], 10);

    deleteBtns[i].addEventListener('click', async (e) => {
        const res = await fetch(`/questions/${questionId}/answers/${answerId}`, {
            method: "DELETE"
        })
    })

    const data = await res.json();
    if (data.message === "Success") {
        const answerContent = document.querySelector(`#answerDisplay-${answerId}`);
        answerContent.remove();
    }
}
