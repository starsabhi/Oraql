// console.log("hello from search js");

const input = document.querySelector('.pText').textContent.split("\"")[1];
const tags = input.split(" ")
// console.log(tags);

const questions = document.querySelectorAll('.qContent')

questions.forEach(question => {
    const words = question.textContent.trim().split(/\s/g);
    console.log(words);
    let newWords = [];
    for (let word of words) {
        word = word.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ");
        let found = false;
        for (let tag of tags) {
            if (word.toLowerCase().startsWith(tag)) {
                newWords.push(`<mark>${word}</mark>`);
                found = true
                break
            } 
        }
        if (!found) newWords.push(word)
    }
    question.innerHTML = newWords.join(" ");
    console.log(question.innerHTML)
})