document.addEventListener('DOMContentLoaded', () => {
    const bandForm = document.querySelector('#band-form');
    bandForm.addEventListener('submit', handleBandFormSubmit);

    const deleteAllButton = document.querySelector('#delete-all');
    deleteAllButton.addEventListener('click', handleDeleteAllClick);
});

const handleBandFormSubmit = function (event) {
    event.preventDefault();

    const bandListItem = createBandListItem(event.target);
    const bandList = document.querySelector('#band-list');
    bandList.appendChild(bandListItem);

    event.target.reset();
};

const createBandListItem = function (form) {
    const bandListItem = document.createElement('li');
    bandListItem.classList.add('band-list-item');

    const bandName = document.createElement('h2');
    bandName.textContent = form.name.value;
    bandListItem.appendChild(bandName);

    const bandMembers = document.createElement('p');
    bandMembers.textContent = form.members.value;
    bandListItem.appendChild(bandMembers);

    const bandActive = document.createElement('p');
    let checkBoxResult = function () {
        if (form.active.checked === true) {
            return "This band is active";
        } else {
            return "This band is inactive";
        };
    };
    let result = checkBoxResult()
    bandActive.textContent = result
    bandListItem.appendChild(bandActive); 

    const bandGenre = document.createElement('p')
    bandGenre.textContent = form.genre.value;
    bandListItem.appendChild(bandGenre);

    const album = document.createElement('h3');
    album.textContent = form.album.value;
    bandListItem.appendChild(album);

    const songs = document.createElement('p');
    songs.textContent = form.songs.value;
    bandListItem.appendChild(songs);

    return bandListItem;

};

const handleDeleteAllClick = function (event) {
    const bandList = document.querySelector('#band-list');
    bandList.innerHTML = '';
}