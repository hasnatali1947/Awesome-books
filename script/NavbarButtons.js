const List = document.getElementById('List');
const AddNew = document.getElementById('AddNew');
const Contact = document.getElementById('Contact');
const AddNewSection = document.getElementById('AddNewSection');
const ListSection = document.getElementById('ListSection');
const ContactSection = document.querySelector('.ContactSection');

List.addEventListener('click', (() => {
  ListSection.style.display = 'flex';
  List.classList.add('listclass');
  ContactSection.style.display = 'none';
  AddNewSection.style.display = 'none';
  Contact.classList.remove('contactClass');
  AddNew.classList.remove('AddnewClass');
}));

Contact.addEventListener('click', (() => {
  ContactSection.style.display = 'flex';
  Contact.classList.add('contactClass');
  AddNewSection.style.display = 'none';
  ListSection.style.display = 'none';
  List.classList.remove('listclass');
  AddNew.classList.remove('AddnewClass');
}));

AddNew.addEventListener('click', (() => {
  AddNewSection.style.display = 'flex';
  AddNew.classList.add('AddnewClass');
  ContactSection.style.display = 'none';
  ListSection.style.display = 'none';
  List.classList.remove('listclass');
  Contact.classList.remove('contactClass');
}));
