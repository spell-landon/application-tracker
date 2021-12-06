//? Grab the add new item button
const newItem = document.querySelector('#add-new-item');
const modalEl = document.querySelector('#modal');
const closeNewItem = document.querySelector('.close');
const createJobSearchBtn = document.querySelector('#create-button-modal');
const formEl = document.querySelector('.job-inputs');
//? Modal Input Variables
const modalInputDate = document.querySelector('#input-date');
const modalInputTime = document.querySelector('#input-time');
const modalInputCompany = document.querySelector('#input-company');
const modalInputInterviewer = document.querySelector('#input-interviewer');
const modalInputJobTitle = document.querySelector('#input-job-title');
const modalInputJobDescription = document.querySelector(
  '#input-job-description'
);
const modalInputSalary = document.querySelector('#input-salary');
const modalInputRemote = document.querySelector('#input-remote');
const modalInputSecondInterview = document.querySelector(
  '#input-second-interview'
);

//? Create new element variables
const createTr = document.createElement('tr');
const createTd = document.createElement('td');

//? Event Handlers
// Modal Open
const openAddNewItemModal = () => {
  modalEl.classList.remove('show-modal');
  modalEl.classList.add('show-modal');
};
// Modal Close
const closeNewJobModal = () => {
  modalEl.classList.remove('show-modal');
};
// Create new Table row and add content

//? Event Listeners
newItem.addEventListener('click', openAddNewItemModal); // Opens the modal when clicked
closeNewItem.addEventListener('click', closeNewJobModal); // Closes the modal when the 'X' is clicked
createJobSearchBtn.addEventListener('click', closeNewJobModal); // Closes the modal when the 'Create New Job' button is clicked
formEl.addEventListener('submit', closeNewJobModal); // Submits the form from the modal when every input is filled out and the 'Create' button is submitted with the "Enter" key from keyboard
