const toggled = 'toggled';

function handleClickableBoxes(evt) {
    let me = evt.target;

    if(me.classList.contains(toggled)) {
        me.classList.remove(toggled)
    } else {
        me.classList.add(toggled)
    }

    var classToCheck = '';

    me.classList.forEach(x => { if(x.startsWith('card-column-')) {classToCheck = `.${x}`}})
    if (checkForBingo(classToCheck)) { return; }

    me.parentElement.classList.forEach(x => { if(x.startsWith('card-row-')) {classToCheck = `.${x} .card-column`}})
    if (checkForBingo(classToCheck)) { return; }

    classToCheck = '.card-row-1 .card-column-1, .card-row-2 .card-column-2, .card-row-4 .card-column-4, .card-row-5 .card-column-5';
    if (checkForBingo(classToCheck)) { return; }

    classToCheck = '.card-row-1 .card-column-5, .card-row-2 .card-column-4, .card-row-4 .card-column-2, .card-row-5 .card-column-1';
    if (checkForBingo(classToCheck)) { return; }
}

function checkForBingo(querySelector) {
    var allHave = true;
    Array.from(document.querySelectorAll(querySelector)).forEach(x => allHave = allHave && x.classList.contains(toggled))
    if (allHave) {
        makeBingo(querySelector)
        return true;
    }
    return false;
}

function makeBingo(querySelector) {
    let pyroContent = `<div class="pyro">
    <!-- Modal content -->
    <div class="modal-content">
      <div class="modal-header">
        <h2>You got Bingo!</h2>
      </div>
      <div class="modal-body">
        <p>Congratulations on Bingo!</p>
      </div>
      <div class="modal-footer">
        <h4>Refresh the page to play again!</h4>
        <sub>This page will keep showing this on every click...</sub>
      </div>
    </div>
    <div class="before"></div><div class="after"></div></div>`;
    document.getElementById('pyrowrapper').innerHTML = pyroContent;
    document.getElementById('pyrowrapper').addEventListener('click', hideBingo);
    document.querySelectorAll(querySelector).forEach(x => {x.classList.add('bingo');})
}

function hideBingo() {
    document.getElementById('pyrowrapper').innerHTML = '';
}

Array.from(document.getElementsByClassName('card-column')).forEach(e => e.addEventListener('click', handleClickableBoxes));
