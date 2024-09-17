console.log("Separat Javascript File");
const incrementCount = document.getElementById("increment");
const flag = true;
function increment() {
    document.body.style.backgroundColor = "yellow";
}
function incrementPink() {
    document.body.style.backgroundColor = "pink";
}

document.getElementById("make-blue").addEventListener("click", function makeBlue() {
    document.body.style.backgroundColor = "steelblue";
})

//input field
const inputTextShown = document.getElementById("input-text-shown");
document.getElementById("update-input").addEventListener("click", function () {

    const inputText = document.getElementById("input-text");
    if (inputText.value === "") {
        alert("Please enter text!");
        document.getElementById("input-text").style.borderColor = "red";
        return; // Exit the function after alert and border color change
    }
    
    inputTextShown.innerText = inputText.value;
    inputText.value='';

})

//post a comment
document.getElementById("post-button").addEventListener("click", function(){

    const commentInput = document.getElementById("comment-text");
    const newCommentInput = commentInput.value;

    const p= document.createElement("p");
    p.innerText = newCommentInput;
    document.getElementById("comment-field").appendChild(p);
    commentInput.value = "";
    
    
})