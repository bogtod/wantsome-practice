/* Ex.1
Loop through the Array and remove all non-active users from the initial Array */

const myData = [{
    name: 'Iggy Turskis',
    active: false
},{
    name: 'Geoff Newell',
    active: true
},{
    name: 'Peter Newnham',
    active: true
},{
    name: 'James Walker',
    active: false
}];


function removeNonActive(arr) {
    return arr.filter((user) => {return user.active === true});
}

console.log(removeNonActive(myData))