module.exports = function check(str, bracketsConfig) {
  if (str.length === 0) return true
  if (str.length % 2 !==0) return false

  let config = bracketsConfig.toString().split(',')

  const isValid = (a,b) => {
      for (let i = 0; i < config.length; i += 2){
         if (a === config[i] && b === config[i+1]) return true
      }
      return false 
  }
    
  let array = str.split('')
  let n = array.length
  for (let i = 0; i < n-1; i++){
    if (isValid(array[i], array[i+1])) {
      array.splice(i, 2) 
      return check(array.join(''), bracketsConfig)
    }
  }
  return false
}
