// grab the add new item button
const newItem = document.querySelector('#add-new-item');
const modalEl = document.querySelector('#modal');
const closeNewItem = document.querySelector('.close');
const createJobSearchBtn = document.querySelector('#create-button-modal');
const formEl = document.querySelector('.job-inputs');
// Table elements
const tableDate = document.querySelector('#td-date');


// Event Handlers
const openAddNewItemModal = () => {
  // modalEl.style.display = 'block'
  modalEl.classList.remove('show-modal');
  modalEl.classList.add('show-modal');
};
const closeNewJobModal = () => {
  //   modalEl.style.display = 'none';
  modalEl.classList.remove('show-modal');
};

// Event Listeners
newItem.addEventListener('click', openAddNewItemModal); // Opens the modal when clicked
closeNewItem.addEventListener('click', closeNewJobModal); // Closes the modal when the 'X' is clicked
createJobSearchBtn.addEventListener('click', closeNewJobModal); // Closes the modal when the 'Create New Job' button is clicked
formEl.addEventListener('submit', closeNewJobModal); // Submits the form from the modal when every input is filled out and the 'Create' button is submitted with the "Enter" key from keyboard
