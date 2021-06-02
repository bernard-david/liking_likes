var neilLikes = 0;
var nicholeLikes = 0;
var jimLikes = 0;
var Neil = document.querySelector('#Neil');
var Nichole = document.querySelector('#Nichole');
var Jim = document.querySelector('#Jim');

function increment(name) {
    var friends = ['Neil', 'Nichole', 'Jim'];
    for (var i = 0; i < friends.length; i++) {
        if (name == friends[i]) {
            if (friends[i] == 'Neil') {
                neilLikes++;
                Neil.innerHTML = neilLikes;
            }
            if (friends[i] == 'Nichole') {
                nicholeLikes++;
                Nichole.innerHTML = nicholeLikes;
            }
            if (friends[i] == 'Jim') {
                jimLikes++;
                Jim.innerHTML = jimLikes;
            }
        }
    }
}