// main elements
const body = document.querySelector('body')
const container = document.querySelector('.task-container')
const taskModal = document.querySelector('.task-modal')
// get all buttons from menu
const createBtn = document.querySelector('.create-btn')
const editBtn = document.querySelector('.edit-btn')
const deleteBtn = document.querySelector('.delete-btn')
const settingsBtn = document.querySelector('.settings-btn')
// main modal
const inputTitle = document.querySelector('#input-title')
const inputDesc = document.querySelector('#input-desc')
const submit = document.querySelector('.form-submit')
// icon
const closeIcon = document.querySelectorAll('.fa-x')
// shadow
const shadow = document.querySelector('.shadow')
// setting modal
const settingsModal = document.querySelector('.settings-modal')

const thmeCards = document.querySelectorAll('.theme-card')

const defaultColor = 'yellow'
// event listeners

createBtn.addEventListener('click',() => {
    showUpTaskModal()
})

settingsBtn.addEventListener('click',() => {
    showUpSettingsModal()
})

closeIcon.forEach(icon => {
    icon.addEventListener('click', (e) => {
        closeModal(e)
    })
})

submit.addEventListener('click', () => {
   createTask(getDataFromInputs().title,getDataFromInputs().desc)
   clearTaskModal()
   closeTaskModal()
})

thmeCards.forEach(card => {
    card.addEventListener('click',(e) => {
        const color = e.target.closest(".theme-card").id
        body.setAttribute('data-theme',color)
        localStorage.setItem('color',`${color}`)
    })
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
    // appends
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

const closeModal = (e) => {
    const modal = e.target.parentElement;
    modal.style.display = 'none'
    shadow.style.display = 'none'
}

const closeTaskModal = () => {
    taskModal.style.display = 'none'
    shadow.style.display = 'none'
}

const clearTaskModal = () => {
    inputTitle.value = ''
    inputDesc.value = ''
}

const showUpTaskModal = () => {
    taskModal.style.display = 'block'
    shadow.style.display = 'block'
}

const showUpSettingsModal = () => {
    settingsModal.style.display = 'flex'
    shadow.style.display = 'block'
}

const loadThemeColor = () => {
    const color = localStorage.getItem('color')
    if(color != null) {
        body.setAttribute('data-theme',color)
    } else {
        body.setAttribute('data-theme',defaultColor)
    }
}

loadThemeColor()
