// /* returns a jsob object with key-value form: {spotName: spotId} */
// const veniceId = '590927576a2e4300134fbed8';
// const breaks = {
//   "Will Rogers State Beach": "5ff8a259222b7ff78169c757",
//   "Santa Monica Beach North": "5af21bc9177e44001a8cc60b",
//   "Santa Monica Pier, North": "5b7efe06d7830b001a875b22",
//   "Santa Monica Pier": "5842041f4e65fad6a77088f7",
//   "Bay St.": "5d6562fdca83aa00012b47af",
//   "Santa Monica Beach South": "5af21e4c8a1a07001a4531dc",
//   "Venice Breakwater": "590927576a2e4300134fbed8",
//   "Venice Breakwater Close-up": "5a26de8ccbecc0001bb480c9",
//   "Venice Beach": "5842041f4e65fad6a7708819",
//   "Venice Pier, Northside": "5accf274bd428f001ad70a33",
//   "Venice Pier, Southside": "5accf279bd428f001ad70a34",
//   "Venice Southside Overview": "5acd238f45d052001ad0b2bd",
//   "Dockweiler State Beach": "5842041f4e65fad6a77088ff",
//   "Shitpipe": "5842041f4e65fad6a7708900",
//   "Hammerland": "5842041f4e65fad6a7708902",
//   "El Porto 43rd St.": "5d684b426fcb630001f08a10",
//   "El Porto Overview": "584204214e65fad6a7709d24",
//   "El Porto 42nd St.": "5a25e409aa1aea001b27be39",
//   "El Porto 41st St.": "5d6847bda897100001ab02aa",
//   "El Porto 39th St.": "5842041f4e65fad6a7708906",
//   "Manhattan Pier Northside": "5acd24954031e5001a13854a",
//   "Manhattan Pier, Southside": "5842041f4e65fad6a7708907",
//   "Hermosa Beach": "5842041f4e65fad6a7708904",
//   "Hermosa Pier Northside": "5b17281e4a274e001a11fcc3",
//   "Hermosa Pier Southside": "5b17293b9f631f001a010d54",
//   "Redondo Breakwater": "5842041f4e65fad6a7708921",
//   "Sapphire St.": "584204214e65fad6a7709d0b",
//   "Torrance Beach": "5af211c8bb6fd9001a25054a",
//   "Haggerty's": "5842041f4e65fad6a7708920",
//   "PV Cove": "5842041f4e65fad6a770892d",
//   "Cabrillo Beach": "5842041f4e65fad6a7708927",
//   "Lunada Bay": "5842041f4e65fad6a770892c"
// };

// const optionsShape = (obj) => {
//   const arr = [];
//   for (var key in obj) {
//     arr.push({
//       name: key,
//       id: obj[key]
//     })
//   }

//   return arr;
// }

// console.log(optionsShape(breaks));
// const getNearbySpots = (spotId) => {
//   fetch(`https://services.surfline.com/kbyg/spots/nearby?spotId=${veniceId}`)
//     .then((response) => {
//       if(response.status >= 400) {
//         throw new Error("Bad response from server");
//       }
//       return response.json();
//     })
//     .then(({data}) => {
//       const { spots } = data;
//       let results = {}
//       for (var spot of spots) {
//         // console.log(spot.name);
//         // console.log(spot._id);
//         if (spot.name && spot._id) {
//           results[spot.name] = spot._id
//         }
//       }
//       return results;
//     })
// })