const hasEmptyField = object => !Object.values(object).every(c => c)

module.exports = hasEmptyField
