// import functions and grab DOM elements
const pollFormEl = document.getElementById('current-poll-form');
const currentPollEl = document.getElementById('current-poll-div');
const voteOneAdd = document.getElementById('add-option-one');
const voteOneSub = document.getElementById('subtract-option-one');
const voteTwoAdd = document.getElementById('add-option-two');
const voteTwoSub = document.getElementById('subtract-option-two');
const publishPollButton = document.getElementById('publish-poll');
const pastPollsEl = document.getElementById('past-polls-array');

// let state
let question = '';
let optionOne = '';
let optionTwo = '';
let votesOne = 0;
let votesTwo = 0;
let pastPolls = [];

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

pollFormEl.addEventListener('submit', (e) => {
    currentPollEl.textContent = '';
    votesOne = 0;
    votesTwo = 0;

    e.preventDefault();
    const data = new FormData(pollFormEl);
    const userQuestion = data.get('question');
    const userOptionOne = data.get('option-one');
    const userOptionTwo = data.get('option-two');

    question = userQuestion;
    optionOne = userOptionOne;
    optionTwo = userOptionTwo;

    displayCurrentPoll();
});

voteOneAdd.addEventListener('click', () => {
    votesOne++;
    renderPoll();
    displayCurrentPoll();
});

voteOneSub.addEventListener('click', () => {
    votesOne--;
    renderPoll();
    displayCurrentPoll();
});

voteTwoAdd.addEventListener('click', () => {
    votesTwo++;
    renderPoll();
    displayCurrentPoll();
});

voteTwoSub.addEventListener('click', () => {
    votesTwo--;
    renderPoll();
    displayCurrentPoll();
});

publishPollButton.addEventListener('click', () => {

    const currentPoll = {
        question: question,
        optionOne: optionOne,
        optionTwo: optionTwo,
        votesOne: votesOne,
        votesTwo: votesTwo
    };

    pastPolls.push(currentPoll);
    displayAllPolls(pastPolls);

});

function renderPoll(question, optionOne, optionTwo, votesOne, votesTwo) {
    const currentPollData = document.createElement('div');
    const questionEl = document.createElement('p');
    questionEl.textContent = question;
    const optionOneEl = document.createElement('p');
    optionOneEl.textContent = optionOne;
    const optionTwoEl = document.createElement('p');
    optionTwoEl.textContent = optionTwo;
    const votesOneEl = document.createElement('p');
    votesOneEl.textContent = votesOne;
    const votesTwoEl = document.createElement('p');
    votesTwoEl.textContent = votesTwo;

    currentPollData.append(questionEl, optionOneEl, optionTwoEl, votesOneEl, votesTwoEl);

    return currentPollData;
}

function displayCurrentPoll() {
    currentPollEl.textContent = '';
    const currentPollData = renderPoll(question, optionOne, optionTwo, votesOne, votesTwo);
    currentPollEl.append(currentPollData);
}

function displayAllPolls() {

    currentPollEl.textContent = '';
    pastPollsEl.textContent = '';

    for (let poll of pastPolls) {
        const pastPollsRender = renderPoll(poll.question, poll.optionOne, poll.optionTwo, poll.votesOne, poll.votesTwo);
        pastPollsEl.append(pastPollsRender);
    }
}

// event listener should take a snapshot of state
// build a poll object poll.question, poll.optionOne poll.optionTwo
// and then push it into array of past polls pastPolls.push(currentPollState)
// then call displayAllPolls() 
// clear pastPolls div, loop through the array and renderPoll(poll.question, poll.)
// store renderPoll return as a constant pastPollsRender
// will loop through array and append it to the pastPolls div pastPollsEl.append()