

let firstName = "Nkurunziza"

let middleName = "Great"

let lastName = "kevin"

let initial = `${firstName[firstName.length-1]}.${middleName[middleName.length-1]}.${lastName[lastName.length-1]}`

let userName = `${firstName} ${middleName} ${lastName}`

let capitalised = `${firstName[0].toUpperCase()}${firstName.slice(1).toLowerCase()}`

console.log(capitalised)