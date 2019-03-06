const getPuzzle = async (wordCount) => {
    const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    if (response.status === 200){
        const data = await response.json()
        return data.puzzle
    } else {
        throw new Error ('Unable to get puzzle')
    }
}

//Playing with country and ip API
// const getCountry = async (countryCode) => {
//     const response = await fetch(`https://restcountries.eu/rest/v2/all`)
//         if (response.status === 200){
//             const data = await response.json()
//             return data.find((country) => country.alpha2Code === countryCode)
//         } else {
//             throw new Error ('Unable to fetch country')
//         }
// }


// const getLocation = async () => {
//     const response = await fetch(`https://ipinfo.io/json?token=d83eb730a6d57f`)
//         if (response.status === 200){
//             return response.json()
//         } else {
//             throw new Error ('Unable to fetch location data')
//         }
// }


// const getCurrentCountry = async () => {
//     const location = await getLocation()
//     return getCountry(location.country)
// }
    