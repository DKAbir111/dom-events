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

//More events-click,mouseover,mouseout,mousemove,mouseenter,mouseleave
document.getElementById("btn-more").addEventListener("click", function(){
    console.log("btn-more-click");
    document.getElementById("text-field").value=''

})

document.getElementById('text-field').addEventListener('focus',function(){
    console.log("Focused-inside the text field");
})
document.getElementById('text-field').addEventListener('blur',function(){
    console.log("Blurred-inside the input field");
})
document.getElementById('text-field').addEventListener('keyup',function(events){
    const textHere=document.getElementById("text-here");
   textHere.innerText=events.target.value;
})

//Delete 
document.getElementById('delete-field').addEventListener('keyup',function(events){
    deleteConfirm=events.target.value;
    console.log(deleteConfirm);
    const deleteBtn=document.getElementById("delete-btn");
    if(deleteConfirm.toLowerCase() === 'delete'){
        deleteBtn.removeAttribute('disabled');
    }
    else{
        deleteBtn.setAttribute('disabled', true);
    }
})

document.getElementById('delete-btn').addEventListener('click',function(){
  document.getElementById('secret-text').innerText='';
})

//Toggle