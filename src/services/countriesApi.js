export const getCountries = async() => {
    const res = await fetch('https://restcountries.com/v2/all');
    return res.json()
};