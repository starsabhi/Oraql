// console.log("Hello from Answers JS")

// get edit form when clicking edit button
const editButtons = document.querySelectorAll('.editAnsBtn');

for (let i = 0; i < editButtons.length; i++) {
    const answerId = parseInt(editButtons[i].id.split('-')[1], 10);

    const [ originalAns, content, form, answerContent, editAnswerButton, deleteAnswerButton ] = [
        document.getElementById(`answer-content-${answerId}`),
        document.getElementById(`${answerId}-edit-content`),
        document.querySelector(`#edit-form-${answerId}`),
        document.querySelector(`#answerDisplay-${answerId}`),
        document.querySelector(`#edit-${answerId}`),
        document.querySelector(`#delete-${answerId}`)
    ]

    // console.log("originalAns",originalAns.innerHTML)
    // console.log(editButtons[i]);
    editButtons[i].addEventListener('click', e => {
        content.value = originalAns.innerText;
        // console.log("new content Value", content.value)
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
            // console.log(questionId);

            const res = await fetch(`/questions/${questionId}/answers/${answerId}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    content: contentValue
                })
            });

            const data = await res.json();
            if (data.message === 'Success') {
                let contentEle = document.getElementById(`answer-content-${answerId}`)
                // contentEle.innerHTML = data.answer.content
                let lines = data.answer.content.split('\n');
                lines = lines.map(line => `<div>${line}</div>`)
                contentEle.innerHTML = lines.join("");
                // console.log(lines)

                form.classList.add("hidden");
                answerContent.classList.remove("hidden");
                editAnswerButton.classList.remove("hidden");
                deleteAnswerButton.classList.remove("hidden");
            } else {
                if (data.message === 'Failure') {
                    const errorDiv = document.getElementById(`edit-errors-${answerId}`);
                    // console.log(errorDiv)
                    errorDiv.innerHTML = data.errors[0];
                }
            }
        })


        const cancelBtn = document.querySelector(`#edit-cancel-${answerId}`);
        cancelBtn.addEventListener('click', (event)=> {
            const errorDiv = document.getElementById(`edit-errors-${answerId}`);
            event.preventDefault();
            event.stopPropagation();
            form.classList.add('hidden')
            answerContent.classList.remove("hidden");
            editAnswerButton.classList.remove("hidden");
            deleteAnswerButton.classList.remove("hidden");
            errorDiv.innerHTML = '';
            // console.log("Inner HTML", content.innerHTML)
            // content.innerHTML = originalAns.innerHTML
        })

    })
}




///Clicking Delete button
const deleteBtns = document.querySelectorAll(".deleteAnsBtn");

for (let i = 0; i < deleteBtns.length; i++) {
    const answerId = parseInt(deleteBtns[i].id.split('-')[1], 10);

    const [ originalAns, content, form, answerContent, editAnswerButton, deleteAnswerButton, textArea, editLabelforDelete ] = [
        document.getElementById(`answer-content-${answerId}`),
        document.getElementById(`${answerId}-edit-content`),
        document.querySelector(`#edit-form-${answerId}`),
        document.querySelector(`#answerDisplay-${answerId}`),
        document.querySelector(`#edit-${answerId}`),
        document.querySelector(`#delete-${answerId}`),
        document.getElementById(`${answerId}-edit-content`),
        document.getElementById(`edit-label-delete-${answerId}`)
    ]



    deleteBtns[i].addEventListener('click', async (e) => {

        if (form.classList.contains("hidden")) {
            form.classList.remove("hidden");
            textArea.classList.add("hidden");
            answerContent.classList.add("hidden");
            editAnswerButton.classList.add("hidden");
            deleteAnswerButton.classList.add("hidden");
        }

        const questionId = parseInt(e.target.classList[0].split('-')[1],10);




        editLabelforDelete.innerHTML = "Do you really want to delete your answer?";
        let submitBtn = document.getElementById(`edit-submit-${answerId}`);
        submitBtn.innerHTML = "Delete"

        submitBtn.addEventListener('click', async(submitEvent) => {
            submitEvent.preventDefault()
            const res = await fetch(`/questions/${questionId}/answers/${answerId}`, {
                method: "DELETE"
            })

            const data = await res.json();
            if (data.message === "Success") {

                const answerDiv = document.getElementById(`answerDiv-${answerId}`);
                answerDiv.remove();
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
            textArea.classList.remove("hidden");
            submitBtn.innerHTML = "Submit";
            editLabelforDelete.innerHTML = "Edit your answer:";
            })

        })
}
