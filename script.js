

const getData = () => {
    const user = fetch('db.json')
    user.then(response =>  response.json())
    .then(data => {
        console.log(data);
        sendData(data)
    })
    .catch(error => {
        console.log(error);
    })
}
const sendData = (data) => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: data.user,
    body: data.role,
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8"
  }
   })
   .then(response => response.json())
   .then(json => console.log(json))
   .catch(error => {
       console.log(error);
   })
}
getData()