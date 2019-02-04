//Global Vars:
let publicKey = '';

//Event Listeners:
document.getElementById("showBalanceButton").addEventListener('click', function(){
    checkBalance(publicKey);
})

//functions:
function issueNewToken(){
    //disable button after pressing.
    document.getElementById("issueNewToken").disabled = true;
    document.getElementById("showToken").innerHTML="<img src=assets/loading.gif>";
    //fetch the generated keys.

    fetch('https://ancient-headland-39950.herokuapp.com/api/newUser')
        .then(res => { return res.json(); })
        .then(res => {
            //modify global variable for use in checkBalance().
            publicKey = res.publicKey
            //Show results in div.
            document.getElementById("showToken").innerHTML="";
            document.getElementById("showToken").innerText = (`Account Created!
                Your public key is: ${publicKey}`);
        })

}

function checkBalance(publicKey){
    fetch(`https://ancient-headland-39950.herokuapp.com/api/getBalance/${publicKey}`)
        .then(res => { return res.json(); })
        .then(res => {
            console.log(res.Balance, res.Type);
            document.getElementById("showBalanceDiv").innerText = (`The balance for account ${publicKey}: ${res.Type ? 'XLM' : 'Other Currency'}: ${res.Balance}`);
        })
}
