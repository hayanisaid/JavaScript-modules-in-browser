

import  {userInfo,userOrders} from './profile.js'
import login from  './login.js'

console.log(userInfo)//{name: "said", age: 22, lang: "JavaScript"}

console.log(login('said'))
//login.js:4 Hello said you have to login to get a full access to the profile

console.log(userOrders)
//{type: "technology", name: "laptop", amount: 1, price: 500}
//{type: "technology", name: "mouse", amount: 1, price: 20}


