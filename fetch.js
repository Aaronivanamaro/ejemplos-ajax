(() => {
    const $fetch = document.getElementById("fetch"),
          $fragment = document.createDocumentFragment();

    fetch("https://jsonplaceholder.typicode.com/user")
        .then(res => res.ok ? res.json() : Promise.reject(res))
        .then(json => {
            json.forEach(el => {
                const $li = document.createElement("li");
                $li.innerHTML = `${el.name} -- ${el.email}`;
                $fragment.appendChild($li);
            })

            $fetch.appendChild($fragment);
        })
        .catch(error => {
            console.log('Error');
            let message = error.statusText || 'Ocurrio un error';
            $fetch.innerHTML = `Error ${error.status}: ${message}`;
        })
})();