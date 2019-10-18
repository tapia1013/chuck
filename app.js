// First we grab the buttons and add event listener when clicked
document.querySelector('.get-jokes').addEventListener('click', getJokes)

function getJokes(e) {
  // grab the number put inside input
  const number = document.querySelector('input[type="number"]').value;
  // console.log(number);

  // prepare ajax request
  const xhr = new XMLHttpRequest();

  // then we call xhr.open
  xhr.open('GET', `https://api.icndb.com/jokes/random/${number}`, true)

  // what we want to do when we get the data xhr.onload
  xhr.onload = function () {
    // check to make sure 200 status
    if (this.status === 200) {
      const response = JSON.parse(this.responseText);


      let output = '';

      // if type is success
      if (response.type === 'success') {
        // if its successful do this... put value since its a OBJ
        response.value.forEach(function (joke) {
          // out put li with joke
          output += `<li>${joke.joke}</li>`
        })

      } else {
        // make and show error msg
        output += '<li>Something went wrong!!!</li>'
      }


      // show the jokes from the function above
      document.querySelector('.jokes').innerHTML = output;

    }

  }


  xhr.send()

  e.preventDefault();
}
