function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6JhNISdgbS4":
        Script1();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();

var surname = player.GetVar('surname');
var name = player.GetVar('name');
var email = player.GetVar('email');
var status = player.GetVar('status');
var score = player.GetVar('score');

var formData = new FormData();
formData.append('Surname', surname);
formData.append('Name', name);
formData.append('Email', email);
formData.append('Status', status);
formData.append('Score', score);
//formData.append('Some text', 'Here is some text');

var request = new XMLHttpRequest();
request.open('POST', 'https://script.google.com/macros/s/AKfycbzbgCuyyLghHbnz0sOdQ6jx9Z9VZis-bS-0absx0cTqkjov1lAaRchDz0f9RFIHYXevYA/exec');
request.send(formData);
}

