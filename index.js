function issueNewToken(){
    fetch('https://ancient-headland-39950.herokuapp.com/api/newUser')
  .then(res => {
    if(res.ok) {
      alert(res);
    } else {
      throw Error(`Request rejected with status ${res.status}`);
    }
  })
  .catch(console.error)
}

function checkBalance(publicKey){
    
}
