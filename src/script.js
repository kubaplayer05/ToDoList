const body = document.querySelector('body')
const container = document.querySelector('.task-container')
// get all buttons from menu
const createBtn = document.querySelector('.create-btn')
const editBtn = document.querySelector('.edit-btn')
const deleteBtn = document.querySelector('.delete-btn')
const settingsBtn = document.querySelector('.settings-btn')

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

createBtn.addEventListener('click',() => {


    createTask('test','lorem ipsum dsnjsd jidsad')
})