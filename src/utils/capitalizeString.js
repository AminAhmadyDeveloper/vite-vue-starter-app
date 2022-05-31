function capitalizeString(string) {
    const firstLetter = string.toString()[0].toUpperCase()
    const restOfString = string.toString().slice(1, string.toString().length)
    return firstLetter + restOfString
}

export default capitalizeString