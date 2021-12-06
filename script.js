//? Grab the add new item button
const addNewItemBtn = document.querySelector('#add-new-item');
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
//? Table Variables
const tableBody = document.querySelector('tbody');

//? Build Class Constructor for New Items
const newObject = {
  date: modalInputDate,
  time: modalInputTime,
  company: modalInputCompany,
  interviewer: modalInputInterviewer,
  job_title: modalInputJobTitle,
  job_description: modalInputJobDescription,
  salary: modalInputSalary,
  remote: modalInputRemote,
  second_interview: modalInputSecondInterview,
};

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
const createNewJobItem = () => {
  let newRow = document.createElement('tr'); // Create new row element variable
  tableBody.append(newRow); // Append the new 'tr' to the table body
  // Create DATE section
  let createDate = document.createElement('td'); // Create the element 'td'
  createDate.innerText = newObject.date.value; // Set the inner text to the value of the input from the modal
  newRow.append(createDate); // Append the text to the row
  // Create TIME section
  let createTime = document.createElement('td'); // Create the element 'td'
  createTime.innerText = newObject.time.value; // Set the inner text to the value of the input from the modal
  newRow.append(createTime); // Append the text to the row
  // Create COMPANY section
  let createCompany = document.createElement('td'); // Create the element 'td'
  createCompany.innerText = newObject.company.value; // Set the inner text to the value of the input from the modal
  newRow.append(createCompany); // Append the text to the row
  // Create INTERVIEWER section
  let createInterviewer = document.createElement('td'); // Create the element 'td'
  createInterviewer.innerText = newObject.interviewer.value; // Set the inner text to the value of the input from the modal
  newRow.append(createInterviewer); // Append the text to the row
  // Create JOB TITLE section
  let createJobTitle = document.createElement('td'); // Create the element 'td'
  createJobTitle.innerText = newObject.job_title.value; // Set the inner text to the value of the input from the modal
  newRow.append(createJobTitle); // Append the text to the row
  // Create JOB DESCRIPTION section
  let createJobDescription = document.createElement('td'); // Create the element 'td'
  createJobDescription.innerText = newObject.job_description.value; // Set the inner text to the value of the input from the modal
  newRow.append(createJobDescription); // Append the text to the row
  // Create SALARY section
  let createSalary = document.createElement('td'); // Create the element 'td'
  createSalary.innerText = newObject.salary.value; // Set the inner text to the value of the input from the modal
  newRow.append(createSalary); // Append the text to the row
  // Create REMOTE section
  let createRemote = document.createElement('td'); // Create the element 'td'
  createRemote.innerText = newObject.remote.value; // Set the inner text to the value of the input from the modal
  newRow.append(createRemote); // Append the text to the row
  // Create SECOND INTERVIEW section
  let createSecondInterview = document.createElement('td'); // Create the element 'td'
  createSecondInterview.innerText = newObject.second_interview.value; // Set the inner text to the value of the input from the modal
  newRow.append(createSecondInterview); // Append the text to the row
};

//? Event Listeners
addNewItemBtn.addEventListener('click', openAddNewItemModal); // Opens the modal when clicked
closeNewItem.addEventListener('click', closeNewJobModal); // Closes the modal when the 'X' is clicked
createJobSearchBtn.addEventListener('click', createNewJobItem); // Adds the input information to a new row on the table body
createJobSearchBtn.addEventListener('click', closeNewJobModal); // Closes the modal when the 'Create New Job' button is clicked
formEl.addEventListener('submit', closeNewJobModal); // Submits the form from the modal when every input is filled out and the 'Create' button is submitted with the "Enter" key from keyboard
