fetch('https://jsonplaceholder.typicode.com/posts', {
        method: "POST",
        body: JSON.stringify({
            title: 'Ridoy',
            body: `I'm Ridoy Sharif. I'm a WordPress & Web designer.I'm Learning JavaScript`,
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((res) => {
        if (!res.ok) {
            const mesage = `Error : ${res.status}`
            throw new Error(mesage)
        }
        return res.json();
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
let he = new XMLHttpRequest