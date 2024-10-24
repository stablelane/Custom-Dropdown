const dropdownHead = document.getElementById('dropdown-head')
const dropdownList = document.getElementById('dropdown-list')
let selectedItem

dropdownHead.addEventListener('click',showList)

const itemArr = Object.values(dropdownList.children)
itemArr.forEach(item => item.addEventListener('click',selectItem))


function selectItem(e) {

    if(selectedItem){
        selectedItem.classList.remove('show-icon')
    }
    dropdownHead.innerHTML = `<p>${this.innerText}</p>
                                    <p>⌄</p>`
    
    showList()
    selectedItem = this.children[0]
    selectedItem.classList.add('show-icon')
}

function showList() {
    dropdownList.classList.toggle('show-list')
}