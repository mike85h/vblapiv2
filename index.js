function issueNewToken(){
    fetch('https://ancient-headland-39950.herokuapp.com/api/newUser')
        .then(res => {
            if(res.ok) {
                console.log(res);
            } else {
                throw Error(`Request rejected with status ${res.status}`);
                alert('Something went wrong. Please try again.');
            }
        })
        .catch(console.error)
}

function checkBalance(publicKey){
    fetch(`https://ancient-headland-39950.herokuapp.com/api/getBalance/${publicKey}`)
        .then(res => {
            if(res) {
                console.log(res);
            } else {
                throw Error(`Error: ${res}`)
                alert('Something went wrong. Please try again.');
            }
        })
        .catch(console.error)
}
