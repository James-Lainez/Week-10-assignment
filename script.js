/*Using HTML, Bootstrap, and JavaScript create a single page website that contains the following:
    - A Bootstrap styled table representing your choice of data.
    - A Bootstrap styled form that allows a user to add a new row to the table when clicking on submit. */

const formButton = document.getElementById("formSubmit")

let number = 0
formButton.addEventListener('click', (event) => {
    event.preventDefault()

    let firstName = document.getElementById('firstName').value
    let lastName = document.getElementById('lastName').value
    let favoriteColor = document.getElementById('favoriteColor').value


    let newTr = document.createElement('tr');

    let addNumber = document.createElement('td')
    addNumber.innerHTML = number
    newTr.append(addNumber)
    let tdFirstName = document.createElement('td');
    tdFirstName.innerHTML = firstName
    newTr.append(tdFirstName)
    
    let tdLastName = document.createElement('td');
    tdLastName.innerHTML = lastName;
    newTr.append(tdLastName);

    let tdFavoriteColor =document.createElement('td');
    tdFavoriteColor.innerHTML = favoriteColor;
    newTr.append(tdFavoriteColor);

    document.getElementById('tBody').appendChild(newTr);

    document.getElementById('firstName').value = ''
    document.getElementById('lastName').value = ''
    document.getElementById('favoriteColor').value = ''

    number++

})

//body color style
document.body.style.backgroundColor = 'rgb(27, 59, 123)'

// text style
const firstNameText = document.querySelector('label[for="firstName"]');
firstNameText.style.color = 'white'
const lastNameText = document.querySelector('label[for="lastName"]');
lastNameText.style.color = 'white'
const favoriteColorText = document.querySelector('label[for="favoriteColor"]');
favoriteColorText.style.color = 'white'

// center table
const alignTable = document.getElementById('table');
alignTable.style.width = '1300px';
alignTable.style.marginLeft = 'auto';
alignTable.style.marginRight = 'auto';
// align form
const alignForm = document.getElementById('form')
alignForm.style.width = '950px'
alignForm.style.marginLeft = 'auto';
alignForm.style.marginRight = 'auto';
alignForm.style.marginTop = '75px'


