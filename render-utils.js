export function renderPoll(question, optionOne, optionTwo, votesOne, votesTwo) {
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

// publish polls button event listener should take a snapshot of state
// build a poll object (i.e. poll.question, poll.optionOne poll.optionTwo, etc.)
// and then push it into array of past polls pastPolls.push(currentPollState)
// then call displayAllPolls() 
// clear pastPolls div, loop through the array and renderPoll(poll.question, poll.)
// store renderPoll return as a constant pastPollsRender
// will loop through array and append it to the pastPolls div pastPollsEl.append()
