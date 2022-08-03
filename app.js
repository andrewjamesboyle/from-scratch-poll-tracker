
import { renderPoll } from './render-utils.js';

const pollFormEl = document.getElementById('current-poll-form');
const currentPollEl = document.getElementById('current-poll-div');
const voteOneAdd = document.getElementById('add-option-one');
const voteOneSub = document.getElementById('subtract-option-one');
const voteTwoAdd = document.getElementById('add-option-two');
const voteTwoSub = document.getElementById('subtract-option-two');
const publishPollButton = document.getElementById('publish-poll');
const pastPollsEl = document.getElementById('past-polls-array');

let question = '';
let optionOne = '';
let optionTwo = '';
let votesOne = 0;
let votesTwo = 0;
let pastPolls = [];

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

export function displayCurrentPoll() {
    currentPollEl.textContent = '';
    const currentPollData = renderPoll(question, optionOne, optionTwo, votesOne, votesTwo);
    currentPollEl.append(currentPollData);
}

export function displayAllPolls() {

    currentPollEl.textContent = '';
    pastPollsEl.textContent = '';

    for (let poll of pastPolls) {
        const pastPollsRender = renderPoll(poll.question, poll.optionOne, poll.optionTwo, poll.votesOne, poll.votesTwo);
        pastPollsEl.append(pastPollsRender);
    }
}