async function getData() {
    document.getElementById('user_container').innerHTML =
        'Bekleyiniz...';
    const response = await fetch(
        'https://api.github.com/search/users?q=' +
        document.getElementById('input').value
    );
    const json = await response.json();
    document.getElementById('user_container').innerHTML = '';
    json.items.map(profile => {
        document.getElementById('user_container').innerHTML += `
        <div class="user" onclick="window.open('${profile.html_url}', '_blank');">
            <p class="login">${profile.login}</p>
            <img class="avatar" src="${profile.avatar_url}"/>
        </div>
    `;
    });
}
