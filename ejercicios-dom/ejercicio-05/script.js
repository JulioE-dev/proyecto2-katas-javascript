const albums = [
    "De Mysteriis Dom Sathanas",
    "Reign of Blood",
    "Ride the Lightning",
    "Painkiller",
    "Iron Fist",
];

const app = document.querySelector('#app');

const ul = document.createElement('ul');
ul.className = 'album-list';

for(const album of albums) {
    const li = document.createElement('li');
    li.className = 'album-item';
    li.textContent = album;
    ul.appendChild(li);
}

app.appendChild(ul);