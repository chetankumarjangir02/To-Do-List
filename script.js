const item = document.querySelector("#item")
const todobox = document.querySelector("#to-do-box")

item.addEventListener(
    "keyup",
    function (event) {
        if (event.key == "Enter") {
            addToDo(this.value)
            this.value = ""
        }
    }

)
const addToDo = (item) => {
    const ListItem = document.createElement("li");
    ListItem.innerHTML = `${item} 
                    <i><img src="cross.svg" alt=""></i>`
    // add event
    ListItem.addEventListener(
        "click",
        function(){
            this.classList.toggle("done")
        }
    )
// remove cross
ListItem.querySelector("i").addEventListener(
    "click",
    function (){
        ListItem.remove()
    }
)


    todobox.appendChild(ListItem)
}