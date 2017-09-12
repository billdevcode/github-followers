export const fetchGitHubData = (username, page = null) => {
    var url = `https://api.github.com/users/${username}`;

    if (page !== null) {
        url = `https://api.github.com/users/${username}/followers?per_page=100&page=${page}`;
    }

    return fetch(url)
    .then(response => {
        if (response.status >= 400) {
            throw new Error("Bad response from server");
    }
        return response.json();
    });
}