console.log("Hello from Answers JS")

// get edit form when clicking edit button
const editButtons = document.querySelectorAll('.editBtn');
console.log(editButtons);
for (let i = 0; i < editButtons.length; i++) {
    // console.log(editButtons[i]);
    editButtons[i].addEventListener('click', e => {
        const answerId = e.target.id;
        console.log(answerId)
    })
}

//click submit button of the edit form