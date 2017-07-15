// The Form Data
let formData = [
  // For demonstration purposes,
  // the first form element has been added to the HTML file as a comment
  // compare the input in the HTML file with the contents of this first object
  {
    "type": "text",
    "label": "First Name",
    "id": "user-first-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "text",
    "label": "Last Name",
    "id": "user-last-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "email",
    "label": "Email Address",
    "id": "user-email",
    "icon": "fa-envelope",
    "options": []
  },
  {
    "type": "text",
    "label": "Current Website URL",
    "id": "user-website",
    "icon": "fa-globe",
    "options": []
  },
  {
    "type": "select",
    "label": "Select Language",
    "id": "user-language",
    "icon": "",
    "options": [
      {
        "label": "English",
        "value": "EN"
      },
      {
        "label": "French",
        "value": "FR"
      },
      {
        "label": "Spanish",
        "value": "SP"
      },
      {
        "label": "Chinese",
        "value": "CH"
      },
      {
        "label": "Japanese",
        "value": "JP"
      }
    ]
  },
  {
    "type": "textarea",
    "label": "Your Comment",
    "id": "user-comment",
    "icon": "fa-comments",
    "options": []
  },
  {
    "type": "tel",
    "label": "Mobile Number",
    "id": "user-mobile",
    "icon": "fa-mobile-phone",
    "options": []
  },
  {
    "type": "tel",
    "label": "Home Number",
    "id": "user-phone",
    "icon": "fa-phone",
    "options": []
  }
];

// HINTS:
// As you can see, we access the first element in the array
// with [0] and then grab the property "label" using the "." operator
( function(){
  // Select the first element from the array
  let first = formData[ 0 ];
  // Log the first object
  console.log( first );
  // Log the string "First Name"
  console.log( first.label );
} )();


// -------- Your Code Goes Below this Line --------


// Select element we want to add content to
// for loop through array
// Create content
// Append to DOM

// This will take a if, elfe if, else statement, which goes from most
// specific to least specific

// if - textarea
// else if - select
// else - text

let _fields = document.getElementById('fields');


for (let i = 0; i < formData.length; i++) {
  let _data = formData[i];



    if (_data.type === 'textarea') {

    // create and append textarea
    // Create a new element that is a textarea
    // Why? Because the type of the input is 'textarea'

      let textarea = document.createElement('textarea');
      textarea.placeholder = _data.label;
      textarea.id = _data.id;

      _fields.appendChild(textarea);

  } else if (_data.type === 'select') {
      // create a drop down
      // provide select options


      let select = document.createElement('select');
      select.id = _data.id;

      let dropDownPlaceHolder = document.createElement('option');
      dropDownPlaceHolder.value = 0;
      dropDownPlaceHolder.innerHTML = _data.label;

      select.appendChild(dropDownPlaceHolder);

      for (let j = 0; j < _data.options.length; j++) {
        let _opt = _data.options[j];

        let _option = document.createElement('option');
        _option.value = _opt.value;
        _option.innerHTML = _opt.label;

        select.appendChild(_option);
      }

      _fields.appendChild(select);

  } else {

    let text = document.createElement('input');

    text.type = _data.type;
    text.placeholder = _data.label;
    text.id = _data.id;


    _fields.appendChild(text);

  }
}















































//
