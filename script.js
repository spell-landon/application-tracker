// grab the add new item button
const newItem = document.querySelector('#add-new-item');
const modalEl = document.querySelector('#modal');
const closeNewItem = document.querySelector('.close');
const createJobSearchBtn = document.querySelector('#create-button-modal');

// Event Handlers
const addNewJob = () => {
  // modalEl.style.display = 'block'
  modalEl.classList.remove('show-modal');
  modalEl.classList.add('show-modal');
};
const closeNewJob = () => {
  //   modalEl.style.display = 'none';
  modalEl.classList.remove('show-modal');
};

// Event Listeners
newItem.addEventListener('click', addNewJob);
closeNewItem.addEventListener('click', closeNewJob);
// modalEl.addEventListener('click', closeNewJob);
createJobSearchBtn.addEventListener('click', closeNewJob);
