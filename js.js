const notes = document.querySelector(".notes");
const note = document.querySelector(".note");
const btn = document.querySelector(".circle");
const btnCreate = document.querySelector(".btn_create");
const redactor = document.querySelector(".text_inp_wind");
const HeadNote = document.querySelector(".head_text")
const TextNote = document.querySelector(".text")

const MyNotes = []

btnCreate.addEventListener("click", (e) =>{
    if(!(HeadNote.value) || !(TextNote.value)){
        redactor.style.display="none";
        alert("Write")
        return 0;
    }else {
        const MyObj = {
            text: TextNote.value,
            header: HeadNote.value,
        }
        console.log(MyNotes)
        createNote(MyObj)

    }
})

    window.addEventListener("load", function (){
        if (localStorage.getItem("Obj")) {
            Obj = JSON.parse(localStorage.getItem("Obj"))
            console.log(Obj)
            try {
                Obj.forEach(el => createNote(el));
            } catch (error) {
                console.error(error);
            }
        }
    });
function createNote(MyObj) {
    MyNotes.push(MyObj)
    console.log(MyNotes)
    localStorage.setItem("Obj", JSON.stringify(MyNotes))
    const textDel = document.createElement("div");
    const textNode = document.createElement("p");
    const headNode = document.createElement("h1");
    const node = document.createElement("div")
    node.classList.add("note")
    notes.appendChild(node)
    node.addEventListener("click", function (e) {
        console.log(MyObj)
    })
    headNode.innerHTML = `${MyObj.header}`
    headNode.classList.add("head_node")
    node.append(headNode);
    textNode.innerHTML = `${MyObj.text}`
    textNode.classList.add("text_node")
    node.append(textNode);
    textDel.classList.add("delete")
    textDel.addEventListener("click", function (e){
        notes.removeChild(node)
        MyNotes.shift(MyObj)
        localStorage.setItem("Obj", JSON.stringify(MyNotes))
        console.log(MyNotes)
    })
    const textDelP = document.createElement("p");
    textDelP.innerHTML = "DELETE"
    textDel.append(textDelP)
    node.append(textDel);
    TextNote.value = '';
    HeadNote.value = '';
    redactor.style.display = "none";
}
btn.addEventListener("click", () => {
    redactor.style.display="inherit";
})

document.onkeydown = function(evt) {
    evt = evt || window.event;
    if (evt.keyCode == 27) {
        redactor.style.display = "none";
    }
};