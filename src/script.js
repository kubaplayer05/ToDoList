// main elements
const body = document.querySelector('body')
const container = document.querySelector('.task-container')
const modal = document.querySelector('.modal')
// get all buttons from menu
const createBtn = document.querySelector('.create-btn')
const editBtn = document.querySelector('.edit-btn')
const deleteBtn = document.querySelector('.delete-btn')
const settingsBtn = document.querySelector('.settings-btn')
// modal
const inputTitle = document.querySelector('#input-title')
const inputDesc = document.querySelector('#input-desc')
const submit = document.querySelector('.form-submit')
// icon
const closeIcon = document.querySelector('.fa-x')
// shadow
const shadow = document.querySelector('.shadow')

// event listeners

createBtn.addEventListener('click',() => {
    showUpModal()
})

closeIcon.addEventListener('click', () => {
    closeModal()
})

submit.addEventListener('click', () => {
   createTask(getDataFromInputs().title,getDataFromInputs().desc)
   clearModal()
   closeModal() 
})

// functions

const createTask = (titleValue,descValue) => {
    // gets task elements to variables
    const task = document.createElement('div')
    const title = document.createElement('h2')
    const desc = document.createElement('p')
    const categoryDiv = document.createElement('div')
    const categoryTitle = document.createElement('span')
    const checkbox = document.createElement('input')
    // assign classes and attributes
    task.classList.add('task')
    title.classList.add('task-title')
    desc.classList.add('task-desc')
    categoryDiv.classList.add('task-category')
    categoryTitle.classList.add('category-title')
    checkbox.classList.add('task-checkbox')
    checkbox.setAttribute('type','checkbox')
    // set text-content
    title.textContent = titleValue
    desc.textContent = descValue
    categoryTitle.textContent = 'Category'
    // apends
    categoryDiv.append(categoryTitle)
    task.append(title,desc,categoryDiv,checkbox)
    container.append(task)
}

const getDataFromInputs = () => {
    const titleValue = inputTitle.value
    const descValue = inputDesc.value
    return {
        title: titleValue,
        desc: descValue
    }
}

const closeModal = () => {
    modal.style.display = 'none'
    shadow.style.display = 'none'
}

const clearModal = () => {
    inputTitle.value = ''
    inputDesc.value = ''
}

const showUpModal = () => {
    modal.style.display = 'block'
    shadow.style.display = 'block'
}

