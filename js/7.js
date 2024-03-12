
alert(`Вам потрібно реалізувати функцію performBankOperations, 
яка приймає об'єкт з балансом рахунку та callback-функцію, 
яка виконує різні банківські операції, а саме: 
покалсти гроші на рахунок та зняти гроші з рахунку. 
Функції з банківськими операціями є колбеками
`);

const balance = {
  money: 0
}; 

function performBankOperations(obj,value,callback){
   return callback(obj,value);
}

const addMoney = (obj,value) =>{
   obj.money += value;
   return `На Вашому балансі: ${obj.money}`;
}
const withdrawMoney = (obj,value) =>{       
   if(obj.money>=value){
      obj.money -= value;
      return `На Вашому балансі: ${obj.money}`;
    }
    else return `На Вашому балансі: ${obj.money}, 
                  недостатньо коштів`
}
const showBalance = obj =>{
    return `На Вашому балансі: ${obj.money}`;
}

let moneyOperation = 0;

moneyOperation = performBankOperations(balance,0,showBalance); 
alert(`баланс: ${moneyOperation}`);

moneyOperation = 1200;
moneyOperation= performBankOperations(balance,moneyOperation,addMoney);
alert(`покласти на рахунок 1200 ${moneyOperation}`);

moneyOperation = 1000;
moneyOperation = performBankOperations(balance,moneyOperation,withdrawMoney);
alert(`зняти з рахунку 1000 ${moneyOperation}`);

moneyOperation = 3045;
moneyOperation= performBankOperations(balance,moneyOperation,addMoney);
alert(`покласти на рахунок 3045 ${moneyOperation}`);

moneyOperation = 10000;
moneyOperation = performBankOperations(balance,moneyOperation,withdrawMoney);
alert(`зняти з рахунку 10000 ${moneyOperation}`);

moneyOperation = 1300;
moneyOperation= performBankOperations(balance,moneyOperation,withdrawMoney);
alert(`зняти з рахунку 1300 ${moneyOperation}`);






