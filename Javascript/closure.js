function Account(){  //Outer Funct
    let balance=1000;
    function Deposit(amount){  ///Inner Funct
        balance=balance+amount;
        console.log("Balanceamount"+balance);
    }
    return Deposit;
}
const MyAccount=Account();
MyAccount(500);
MyAccount(700);