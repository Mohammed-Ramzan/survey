let currentSetIndex = 0;
let currentIndex = 0;
const questionSets = [
  ['What is your dog\'s name?', 'How big is a?'],
  ['What breed is a?', 'When is a\'s birthday?', 'Any allergies?'],
  ['What is your email?', 'Choose a 6 or 12 Mo. Plan and Get Double Your First Box!', 'Popular Related Items']
];
const surveyResults = {};


function nextQuestion() {
  const currentQuestion = questionSets[currentSetIndex][currentIndex];
  let userInput;
  if (currentQuestion === 'What is your dog\'s name?') {
    // Get user input
    let name = document.getElementById('dog-name').value.trim(); // Trim whitespace
    let girl = document.getElementById('girl');
    let boy = document.getElementById('boy');
    // Check if input is empty
    if (name === '') {
      alert('Please Enter you dog name.');
      return; // Exit function if input is empty
    }else if(!(girl.checked || boy.checked)){
      alert("Please choose gender");
      return;
    }
}else if (currentQuestion === 'How big is a?') {
  const selectedCard = document.querySelector('.dog-size-card.selected');
  if(!selectedCard){
    alert("Please tell us about your dog size")
    return;
  }
}else if (currentQuestion === 'Any allergies?') {
  let chicken = document.getElementById("chicken");
  let turkey = document.getElementById("turkey");
  let beef = document.getElementById("beef");
  let none = document.getElementById("none");
  if(!(chicken.checked || turkey.checked || beef.checked || none.checked)){
    alert("Please select one or more options")
    return;
  }
}   else if (currentQuestion === 'What is your email?') {
  let userEmail = document.getElementById("y-email").value.trim(); 
  if (userEmail === '') {
      alert('Please Enter your Email.');
      return; // Exit function if input is empty
  }
  // Regular expression pattern for validating email format
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(userEmail)) {
      alert('Please Enter a valid Email.');
      return; // Exit function if input is not a valid email
  }
}else if (currentQuestion === 'Choose a 6 or 12 Mo. Plan and Get Double Your First Box!') {
  const selectedCard = document.querySelector('.bill-card.selected');
  if(!selectedCard){
    alert("Selection Required")
    return;
  }
}



  if (currentQuestion === 'What is your dog\'s name?') {
    let name = document.getElementById('dog-name').value;
    document.querySelector(".order-name span").innerHTML = name;
    const selectedLabel = document.querySelector('.first-input-labels label.selected-label').innerHTML;
    userInput = `${name}`;
  } else if (currentQuestion === 'What breed is a?') {
    userInput = document.getElementById('dog-breed').value;
  }
  else if (currentQuestion === 'When is a\'s birthday?') {
    userInput = "hay";
  }   else if (currentQuestion === 'What is your email?') {
    userInput = "paragraph";
  }else if (currentQuestion === 'How big is a?') {
    const selectedCard = document.querySelector('.dog-size-card.selected');
    const selectedCardHead = selectedCard.querySelector('.card-heading');
    document.querySelector(".dog-size").innerHTML = `${selectedCardHead.textContent} dog`;
    userInput = "plan";
  }else if (currentQuestion === 'Any allergies?') {
    let chicken = document.getElementById("chicken");
  let turkey = document.getElementById("turkey");
  let beef = document.getElementById("beef");
  let none = document.getElementById("none");
  if(chicken.checked){
    document.querySelector(".food1").innerHTML = chicken.value;
  }
  if(none.checked){
    document.querySelector(".food1").innerHTML = "";
  }
  if(turkey.checked){
    document.querySelector(".food2").innerHTML = turkey.value;
  }
  if(beef.checked){
    document.querySelector(".food3").innerHTML = beef.value;
  }
    userInput = "color";
  } else if (currentQuestion === 'Choose a 6 or 12 Mo. Plan and Get Double Your First Box!') {
    const selectedCard = document.querySelector('.bill-card.selected');
    const selectedCardHeading = selectedCard.querySelector('.bill-heading');
    const selectedCardPay = selectedCard.querySelector('.bill-pay');
    let numberOnly = selectedCardPay.textContent.match(/\d+/);
    document.querySelector('.subscription-months').innerHTML = selectedCardHeading.textContent;
    document.querySelector('.price1').innerHTML = `$${numberOnly}.00`;
    const totalPriceElement = document.querySelector('.total');
    let totalPrice = parseInt(totalPriceElement.textContent.match(/\d+/)[0]);
    totalPrice += parseInt(numberOnly);
    totalPriceElement.innerHTML = `$${totalPrice}.00`;
    userInput = "plan";
  } else if (currentQuestion === 'Popular Related Items') {
    const selectedCard = document.querySelector('.item-card.selected');
   if(selectedCard){
    const selectedCardHeading = selectedCard.querySelector('.item-card-heading');
    const selectedCardPay = selectedCard.querySelector('.item-card-price span');
    let numberOnly = selectedCardPay.textContent.match(/\d+/);
    document.querySelector('.related-items-heading1').innerHTML = selectedCardHeading.textContent;
    document.querySelector('.related-items-price1').innerHTML = `$${numberOnly}.00`;
        // Add the price to the total
    const totalPriceElement = document.querySelector('.total');
    let totalPrice = parseInt(totalPriceElement.textContent.match(/\d+/)[0]);
    totalPrice += parseInt(numberOnly);
    totalPriceElement.innerHTML = `$${totalPrice}.00`;
   }
    userInput = "btn";
  } else {
    userInput = document.getElementById(currentQuestion).value;
  }
  surveyResults[currentQuestion] = userInput;
  
  if (currentIndex < questionSets[currentSetIndex].length - 1) {
    currentIndex++;
    loadQuestion();
    updateProgressBar();
    updateHeading(); // Update heading after loading the question
  } else if (currentSetIndex < questionSets.length - 1) {
    currentSetIndex++;
    currentIndex = 0;
    loadQuestion();
    updateProgressBar();
    updateHeading(); // Update heading after loading the question
  } else {
    showSurveyResults();
  }
}

function previousQuestion() {
  if (currentIndex > 0) {
    currentIndex--;
    loadQuestion();
    updateProgressBar();
    updateHeading(); // Update heading after loading the question
  } else if (currentSetIndex > 0) {
    currentSetIndex--;
    currentIndex = questionSets[currentSetIndex].length - 1;
    loadQuestion();
    updateProgressBar();
    updateHeading(); // Update heading after loading the question
  }
}

function loadQuestion() {
  const question = questionSets[currentSetIndex][currentIndex];
  const questionContainer = document.getElementById('questions-container');
  questionContainer.innerHTML = ''; // Clear previous content
  
  if (question === 'What is your dog\'s name?') {
    questionContainer.innerHTML = `
    <div class="first-input-data">
      <div class="text-input-component"><input type="text" name="subscription_dog_name[dog_name]" id="dog-name" value="" maxlength="50" placeholder="Dog name" aria-required="false" aria-labelledby="dog-name-label" class="text-input-component-input"> <label for="dog-name" id="dog-name-label" class="text-input-component-label">
Dog name
</label> <div>
      <div class="first-input-labels">
      <label for="girl" class="input-girl">She's a good girl</label>
    <input type="checkbox" name="" id="girl">
    <label for="boy" class="input-boy">He's a good boy</label>
    <input type="checkbox" name="" id="boy">
    </div>
  </div>
    `;
  } else if (question === 'How big is a?') {
    questionContainer.innerHTML = `
    <div class="cards">
      <div class="card dog-size-card" data-card-id="1">
        <div class="card-image"><img src="https://assets.barkbox.com/assets/classic_flow/size_step/small-dog@2x-f20aada10b93f118902fda27eb6efc059ce7d6ecf5d67fe42fa6bd24152b065a.png" alt="small-dog-image"></div>
        <div class="card-content">
          <p class="card-heading">Small</p>
          <p class="card-lbs">1-20lbs</p>
        </div>
      </div>
      <div class="card dog-size-card" data-card-id="2">
        <div class="card-image"><img src="https://assets.barkbox.com/assets/classic_flow/size_step/medium-dog@2x-2ed2978ba7613f7d00ea134a4d4d61a8b0db7c875f37e7ffd63c98986c63e015.png" alt="medium-dog-image"></div>
        <div class="card-content">
          <p class="card-heading">Medium</p>
          <p class="card-lbs">20-50lbs</p>
        </div>
      </div>
      <div class="card dog-size-card" data-card-id="3">
        <div class="card-image"><img src="https://assets.barkbox.com/assets/classic_flow/size_step/large-dog@2x-d8cd716cd46cac3339e14aaab01d76ec3b2201aa36622ff497dbbd46257b32d7.png" alt="large-dog-image"></div>
        <div class="card-content">
          <p class="card-heading">Large</p>
          <p class="card-lbs">50+lbs</p>
        </div>
      </div>
      </div>
      <p class="card-p">All products are the same price, regardless of size.
You can change sizes at any time.</p>
      `;
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
      card.addEventListener('click', () => {
        cards.forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
      });
    });
  } 
  else if (question === 'What breed is a?') {
    questionContainer.innerHTML = `
    <div class="first-input-data2">
      <div class="text-input-component"><input type="text" name="" id="dog-breed" value="" maxlength="50" placeholder="Dog breed" aria-required="false" aria-labelledby="dog-breed-label" class="text-input-component-input"> <label for="dog-name" id="dog-breed-label" class="text-input-component-label">
Dog Breed
</label> <div> 
<button class="skip-btn" onclick="nextQuestion()">Or, skip this step</button>
    `;
  }
  else if (question === 'When is a\'s birthday?') {
    questionContainer.innerHTML = `
      <p class="birthday-para">Or adoption day. We want to help celebrate their special day!</p>
      <div class="first-input-data3">
      <div class="text-input-component"><input type="number" name="" id="birthday" value="" maxlength="50" placeholder="birthday" aria-required="false" aria-labelledby="birthday-label" class="text-input-component-input"> <label for="birthday" id="birthday-label" class="text-input-component-label">
MM/YY
</label> <div> 
<button class="skip-btn" onclick="nextQuestion()">Or, skip this step</button>
    `;
  }else if (question === 'Any allergies?') {
    questionContainer.innerHTML = `
    <p class="birthday-para aller-para">Our treats are formulated by a certified nutritionist and made in the USA and Canada to make sure your pup is happy and healthy.</p>
    <p class="birthday-para aller-para">Please do not send any...</p>
    <div class="input-checkboxes">
      <div class="input-checkbox">
      <input type="checkbox" name="" value="chicken" id="chicken">
      <label for="chicken" class="n-label">Chicken</label>
        </div>
      <div class="input-checkbox">
      <input type="checkbox" name="" value="turkey" id="turkey">
    <label for="turkey" class="n-label">Turkey</label>
  </div>
  <div class="input-checkbox">
    <input type="checkbox" name="" value="beef" id="beef">
      <label for="beef" class="n-label">Beef</label>
  </div>
  <div class="input-checkbox">
      <input type="checkbox" name="" value="none" id="none">
    <label for="none" class="n-label">None</label>
    </div> 
  </div>
    <p class="birthday-para aller-para-last">If your pup has other dietary needs, please chat with us after you checkout and we'll do our best to accommodate.</p>
    `;
    const inputCheckboxesInput = document.querySelectorAll('.input-checkbox input');
const inputCheckboxes = document.querySelectorAll('.input-checkbox');

inputCheckboxesInput.forEach((card, index) => {
card.addEventListener('click', () => {
if (index === inputCheckboxesInput.length - 1) {
  // If "none" option is selected
  inputCheckboxesInput.forEach((checkbox, idx) => {
    checkbox.checked = false; // Uncheck all checkboxes
    inputCheckboxes[idx].classList.remove('selected');
    inputCheckboxes[3].classList.toggle('selected');
    inputCheckboxesInput[3].checked = true;
  });

} else {
  inputCheckboxes[3].classList.remove('selected');
    inputCheckboxesInput[3].checked = false;
    inputCheckboxes[index].classList.toggle('selected');
console.log(card.innerHTML);
}

});
});

} else if (question === 'Popular Related Items') {
    questionContainer.innerHTML = `
    <p class="card-p item-card-top">All products are the same price, regardless of size.
You can change sizes at any time.</p>
    <div class="cards item-cards">
      <div class="card item-card" data-card-id="1">
        <div class="best-value">BEST VALUE</div>
        <div class="card-image item-card-image"><img src="https://d2pa97dl1lg52b.cloudfront.net/monthlyaddonsettings/0b433a5949cf04e8b32523928c3de9b252eeae37.png?1706024455" alt="medium-dog-image"></div>
        <div class="card-content bill-content">
          <p class="card-heading item-card-heading">The Mutts Have Bundle</p>
          <p class="card-lbs item-card-para">Get an extra toy, beef food topper, and extra treat bag every month!</p>
          <p class="item-bill item-card-price"><del>$25/month</del> <span>$19/month</span></p>
        </div>
      </div>
      <div class="card item-card" data-card-id="2">
        <div class="card-image item-card-image"><img src="https://assets.barkbox.com/assets/classic_flow/add_items_xt@2x-325c1d4b0e148321a3b20adae9575d4916916561d0c87a5851dc4d5d4c500395.png" alt="large-dog-image"></div>
        <div class="card-content bill-content">
          <p class="card-heading item-card-heading">Extra Toy Club</p>
          <p class="card-lbs item-card-para">Make next month's box EXTRA with one more toy!</p>
          <p class="item-bill item-card-price"><del>$12/month</del> <span>$9/month</span></p>
        </div>
      </div>
      </div>
      <button class="skip-btn item-skip" onclick="nextQuestion()">Or, skip this step</button>
      `;
      const cards = document.querySelectorAll('.card');

      cards.forEach(card => {
          card.addEventListener('click', () => {
              // Toggle "selected" class on the clicked card
              card.classList.toggle('selected');
              
              // Remove "selected" class from other cards
              cards.forEach(c => {
                  if (c !== card && c.classList.contains('selected')) {
                      c.classList.remove('selected');
                  }
              });
          });
      });
      
  } 
  else if (question === 'Choose a 6 or 12 Mo. Plan and Get Double Your First Box!') {
    questionContainer.innerHTML = `
    <div class="cards">
      <div class="card bill-card" data-card-id="1">
        <div class="card-image"><img src="https://assets.barkbox.com/assets/classic_flow/one-year@2x-331163aab9423af419c92acbc089fc848fa17c545b6c81ae5d32bc831965ac40.png" alt="small-dog-image"></div>
        <div class="card-content bill-content">
          <p class="bill-heading">12 Month Subscription</p>
          <p class="card-lbs bill-pay">$20/BarkBox</p>
          <p class="bill-month">+DOUBLE FIRST BOX</p>
        </div>
      </div>
      <div class="card bill-card" data-card-id="2">
        <img alt="Most popular" src="//assets.barkbox.com/assets/v3/shared/most-popular-ribbon@2x-00aaf71a6d5c93d990c4abf33a8c2f563a32752aeba142b671183cba2fe5cd46.png" class="plan-most-popular">
        <div class="card-image"><img src="https://assets.barkbox.com/assets/classic_flow/six-months@2x-890301195dc7bc3377dccf02d2d9b94eeffe7233b760d2ea409f477719e4c2c9.png" alt="medium-dog-image"></div>
        <div class="card-content bill-content">
          <p class="bill-heading">6 Month Subscription</p>
          <p class="card-lbs bill-pay">$25/BarkBox</p>
          <p class="bill-month">+DOUBLE FIRST BOX</p>
        </div>
      </div>
      <div class="card bill-card" data-card-id="3">
        <div class="card-image"><img src="https://assets.barkbox.com/assets/classic_flow/one-month@2x-0e939d52895a2c3cce831708b2ebe71ad3c6c15868c8722436b8bc80486aec1c.png" alt="large-dog-image"></div>
        <div class="card-content bill-content">
          <p class="bill-heading">Monthly Subscription</p>
          <p class="card-lbs bill-pay">$35/BarkBox</p>
          <p class="bill-month"></p>
        </div>
      </div>
      </div>
      <h2 class="bill-h2">100% Happy Guarantee</h2>
      <p class="bill-p1">All products are the same price, regardless of size.
You can change sizes at any time.</p>
      <p class="bill-p2">All products are the same price, regardless of size.
You can change sizes at any time.</p>
      `;
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
      card.addEventListener('click', () => {
        cards.forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
      });
    });
  }  else if (question === 'What is your email?') {
    questionContainer.innerHTML = `
    <div class="first-input-data3">
      <div class="text-input-component"><input type="email" name="" id="y-email" value="" maxlength="50" placeholder="Dog breed" aria-required="false" aria-labelledby="y-email-label" class="text-input-component-input"> <label for="y-email" id="y-email-label" class="text-input-component-label">
Email
</label> <div> 
<div class="email-checkbox">
      <input type="checkbox" name="" id="e-check">
    <label for="e-check" class="e-check">Send me more ways to make my dog happy.</label>
    </div> 
    <hr />
    <div class="login-email">Have an account? <a href="#" target="_blank">Login</a>.</div>
    <div class="privacy-email">By clicking "Continue", you agree to our
      <a href="#" target="_blank">Terms</a> and <a href="#" target="_blank">Privacy Policy</a>.</div>
    `;
  }
else {
    questionContainer.innerHTML = `<input type="text" id="${question}" value="${surveyResults[question] || ''}">`;
    document.getElementById(question).focus();
  }
  
  // Hide the back button if it's the first question
  const backButton = document.querySelector('.btn-back');
  const btnContainer = document.getElementById('btn-container');
  if (currentIndex === 0 && currentSetIndex === 0) {
    backButton.style.display = 'none';
  } else {
    backButton.style.display = 'inline-block';
  }
       // Add event listener to labels for selecting only one
const labels = document.querySelectorAll('.first-input-labels label');
labels.forEach(label => {
label.addEventListener('click', () => {
  labels.forEach(l => l.classList.remove('selected-label'));
  label.classList.add('selected-label');
});
});
}

function selectButton(button) {
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(b => b.classList.remove('selected'));
  button.classList.add('selected');
}

function showSurveyResults() {
document.getElementById('survey-container').style.display = 'none';
document.getElementById('survey-results').style.display = 'flex';

// Update the heading dynamically to "Result"
const heading = document.getElementById('heading');
heading.textContent = 'Where should we ship to?';

const resultList = document.getElementById('result-list');
resultList.innerHTML = ''; // Clear previous results

for (const question in surveyResults) {
const li = document.createElement('li');
li.textContent = `${question[0].toUpperCase() + question.slice(1)}: ${surveyResults[question]}`;
resultList.appendChild(li);
console.log(li)
}
}


function updateProgressBar() {
  const totalQuestions = questionSets.reduce((acc, set) => acc + set.length, 0);
  const completedQuestions = currentSetIndex * questionSets[0].length + currentIndex + 1;
  const progress = (completedQuestions / totalQuestions) * 100;
  document.querySelector('.progress-bar').style.width = `${progress}%`;
}

function updateHeading() {
  const heading = document.getElementById('heading');
const currentQuestion = questionSets[currentSetIndex][currentIndex];
const dogName = surveyResults["What is your dog's name?"] || "Your Dog";
let headingText;

if (currentQuestion === "How big is a?") {
headingText = `How big is ${dogName}?`;
} else if (currentQuestion === "What breed is a?") {
headingText = `What breed is ${dogName}?`;
}  else if (currentQuestion === "When is a\'s birthday?") {
headingText = `When is ${dogName}\'s birthday?`;
} else {
headingText = currentQuestion;
}

heading.innerHTML = headingText;
}


loadQuestion();
updateProgressBar();
updateHeading();
