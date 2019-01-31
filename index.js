let publicKey = '';


function issueNewToken(){
    //disable button after pressing.
    document.getElementById("issueNewToken").disabled = true;
    //fetch the generated keys.
    fetch('https://ancient-headland-39950.herokuapp.com/api/newUser')
        .then(res => { return res.json(); })
        .then(res => {
            //modify global variable for use in checkBalance().
            publicKey = res.publicKey
            //Show results in div.
            document.getElementById("showToken").innerText = (`Account Created!
                Your public key is: ${publicKey}`);
        })
        .catch(console.error)
}

function checkBalance(publicKey){
    fetch(`https://ancient-headland-39950.herokuapp.com/api/getBalance/${publicKey}`)
        .then(res => { return res.json(); })
        .then(res => {
            document.getElementById("showBalance").innerText = (`The balance for account ${publicKey}: ${res.balance}`);
        })
        .catch(console.error)
}
