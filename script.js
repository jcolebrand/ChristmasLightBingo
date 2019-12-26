let phrases = [
    {phrase:'test',multiple:false},
    {phrase:'what', multiple: true}
];

//15/6/3 -> list -> randomize

// fischer yates shuffle 
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

let commonPhrases = [
    // signs
    {phrase: 'Santa Stop Here', multiple: true, list: 'common'},
    {phrase: 'HO HO HO', multiple: true, list: 'common'},
    {phrase: 'Reindeer X-ing', multiple: true, list: 'common'},

    //animated
    {phrase: 'Falling Icicle Lights', multiple: true, list: 'common'},
    {phrase: 'Rotating Laser Display', multiple: true, list: 'common'},

    //items
    {phrase: 'Santa Flying Away', multiple: true, list: 'common'},
    {phrase: 'Snowflakes', multiple: true, list: 'common'},
    {phrase: 'Puppy in a Box', multiple: true, list: 'common'},
    {phrase: 'Yeti', multiple: true, list: 'common'},
    {phrase: 'Frosty', multiple: true, list: 'common'},
    {phrase: 'Grinch', multiple: true, list: 'common'},
    {phrase: 'Angels', multiple: true, list: 'common'},
    {phrase: 'Penguins', multiple: true, list: 'common'},
    {phrase: 'Reindeer', multiple: true, list: 'common'},
    {phrase: 'Rudolph', multiple: true, list: 'common'},
    {phrase: 'Gingerbread Man', multiple: true, list: 'common'},
    {phrase: 'Sled on the Roof', multiple: true, list: 'common'},

    //inflatable
    {phrase: 'Inflatable Snowman', multiple: true, list: 'common'},
    {phrase: 'Inflatable Santa', multiple: true, list: 'common'},
    {phrase: 'Inflatable Snowglobe', multiple: true, list: 'common'},
    {phrase: 'Inflatable Novelty Vehicle', multiple: true, list: 'common'},

    //specialty
    {phrase: '"Elvis"<br/>(Blue Christmas)', multiple: true, list: 'common'},
    {phrase: (Math.floor(Math.random() * 4) + 2) + '+ Nutcrackers in One Yard', multiple: true, list: 'common'},
    {phrase: '12 Days of Christmas<br/>(any day)', multiple: true, list: 'common'},
    {phrase: 'Frosty on the Roof', multiple: true, list: 'common'},
    {phrase: 'Nativity with no Baby Jesus', multiple: true, list: 'common'},

    //creepy
    {phrase: 'Creepy Nativity', multiple: true, list: 'common'},
    {phrase: 'Creepy Santa', multiple: true, list: 'common'},
    {phrase: 'Creepy Snowman', multiple: true, list: 'common'},

    // multiple: false
    {phrase: 'Car with Christmas Lights', multiple: false, list: 'common'},
    {phrase: 'Extreme Patriot', multiple: false, list: 'common'},
    {phrase: 'Angels Flying in Trees', multiple: false, list: 'common'},
    {phrase: 'Super Sports Fan', multiple: false, list: 'common'},
    {phrase: 'M&Ms', multiple: false, list: 'common'},
    {phrase: 'Carolers', multiple: false, list: 'common'},
    {phrase: 'Snowman Family', multiple: false, list: 'common'},
    {phrase: 'Horsedrawn Carriage', multiple: false, list: 'common'},
    {phrase: '_____________<br/>Your choice', multiple: false, list: 'common'},
]
let uncommonPhrases = [
    {phrase: 'Inflatable Candy Canes', multiple: false, list: 'uncommon'},
    {phrase: 'Poinsettia', multiple: false, list: 'uncommon'},
    {phrase: 'Nightmare Before Christmas', multiple: false, list: 'uncommon'},
    {phrase: 'Toy Story', multiple: false, list: 'uncommon'},
    {phrase: 'Hello Kitty', multiple: false, list: 'uncommon'},
    {phrase: 'Dragon', multiple: false, list: 'uncommon'},
    {phrase: 'Minions', multiple: false, list: 'uncommon'},
    {phrase: 'Narwhal', multiple: false, list: 'uncommon'},
    {phrase: 'Garments with Christmas Lights', multiple: false, list: 'uncommon'}
]
let rarePhrases = [
    {phrase: 'Fleur-de-lis', multiple: false, list: 'rare'},
    {phrase: 'Alligators with Santa Hats', multiple: false, list: 'rare'},
    {phrase: 'Smurfs', multiple: false, list: 'rare'},
    {phrase: 'Cacti', multiple: false, list: 'rare'},
    {phrase: 'Chili Peppers', multiple: false, list: 'rare'},
    {phrase: 'Tractor', multiple: false, list: 'rare'}
]

let centerPhrases = [
    '<img src="snowballs2.png">',
    'Free Space<hr/>Instant Win!!<br/>12 Days of Christmas (all)',
    'Free Space<hr/>Instant Win!!<br/>Yard blew a fuse!!'
]

function generatePhrases() {
    let phraseArray = shuffle(
        [].concat (
            shuffle(commonPhrases).slice(0,20)
        ).concat(
            shuffle(uncommonPhrases).slice(0,6)
        ).concat(
            shuffle(rarePhrases).slice(0,3)
        )
    );
    counter = 0;
    for(let r = 1; r < 6; r++) {
        for (let c = 1; c < 6; c++) {
            let cell = document.querySelector(`.card-row-${r} .card-column-${c}`)
            if (r == 3 && c == 3) {
                cell.innerHTML = centerPhrases[Math.floor(Math.random() * centerPhrases.length)];
                continue;
            } else {
                let item = phraseArray[counter];
                let inner = item.phrase;
                var r2 = (Math.floor(Math.random() * 512) %9) %6;
                if (item.multiple && r2 > 1) {
                        inner += "<br/>"
                        for(let r = 0; r < r2; r++) {
                            inner += "◻ "
                        }
                }
                cell.innerHTML = inner;
                cell.classList.add(item.list);
                counter++;
                if (counter >= phraseArray.length) {
                    counter = 0;
                }
            }
        }
    }
}

generatePhrases();