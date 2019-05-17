/*Ex 2
Convertiti toate distantele in mile - 0.621371 * distance - folosind map
Returnati toate itemele cu distanta mai mica de 10000  - folosind filter
Returnati distanta totala - folosind reduce
*/

const distances = [
    { from: 'New York', to: 'Dhaka', distance: 12654},
    { from: 'Sydney', to: 'chittagong', distance: 8858},
    { from: 'Kolkata', to: 'Sylhet', distance: 670}
  ]

function convertToMiles(arr) {
    return arr.map((distance) => {return (distance.distance * 0.621371).toFixed(2)});
};


const lessThanTenTh = arr => { return arr.filter((road) => road.distance < 10000) }


const totalDist = arr => arr.reduce((acc, road) => acc + road.distance, 0)