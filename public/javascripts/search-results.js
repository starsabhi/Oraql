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
        // word = word.replace(/[^\w\s]|_$/g, "").replace(/\s+/g, " ");
        let found = false;
        for (let tag of tags) {
            if (word.toLowerCase().includes(tag)) {
                if (!["?", "!", ".", "," ].includes(word[word.length - 1])) {
                  console.log(word);
                  newWords.push(`<mark>${word}</mark>`);
                } else {
                  newWords.push(
                    `<mark>${word.slice(0, word.length - 1)}</mark>${
                      word[word.length - 1]
                    }`
                  );
                }
                found = true
                break
            } 
        }
        if (!found) newWords.push(word)
    }
    question.innerHTML = newWords.join(" ");
    console.log(question.innerHTML)
})