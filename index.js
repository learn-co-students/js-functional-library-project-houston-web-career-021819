fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      const keys = Object.keys(collection)
      for (let i = 0; i < keys.length; i++){
        callback(collection[keys[i]], keys[i], collection)
      }
      return collection
    },

    map: function(collection, callback) {
      const keys = Object.keys(collection)
      const mapped = []
      for (let i = 0; i < keys.length; i++){
        mapped.push(callback(collection[keys[i]], keys[i], collection))
      }
      return mapped
    },

    reduce: function(collection, callback, acc) {
      const newCollection = [ ...collection ]
      if (acc === undefined){
        acc = newCollection.shift()
      }
      for (let i = 0; i < newCollection.length; i++){

          acc = callback(acc, newCollection[i], collection)
        }
      return acc
    },

    find: function(collection, predicate) {
      for (let i = 0; i < collection.length; i++){
        if (predicate(collection[i])){
          return collection[i]
        }
      }
    },

    filter: function(collection, predicate) {
      const filtered = []
      for (let i = 0; i < collection.length; i++){
        if (predicate(collection[i])){
          filtered.push(collection[i])
        }
      }
      return filtered
    },

    size: function(collection) {
      const keys = Object.keys(collection)
      return keys.length
    },

    first: function(array, n) {
      if(n === undefined) {
        return array[0]
      } else {
        return array.slice(0, n)
      }
    },

    last: function(array, n){
      if(n === undefined) {
        return array[array.length-1]
      } else {
        return array.slice(array.length-n)
      }
    },

    compact: function(array) {
      const filtered = []
      for (let i = 0; i < array.length; i++){
        if (array[i]){
          filtered.push(array[i])
        }
      }
      return filtered
    },

    sortBy: function(array, callback){
      const mapped = []
      let sorted = []
      for (let i = 0; i < array.length; i++){
        mapped.push(callback(array[i]))
      }
        if (typeof mapped[0] === "string"){
          sorted = mapped.sort()
        }else{
          sorted = mapped.sort(function(a,b){return a-b})
        }
      sortedArray = []
      for (let j = 0; j < sorted.length; j++){
        for (let x = 0; x < array.length; x++){
          if (sorted[j] == callback(array[x])){
            sortedArray.push(array[x])
            sorted[j] = null
          }
        }
      }
      return sortedArray
    },

    flatten: function(array, shallow){
      let newArray = []
      if (shallow === true) {
        for (let i = 0; i < array.length; i++){
          if (typeof array[i] != "object") {
            newArray.push(array[i])
          } else {
            for (let j=0; j < array[i].length; j++) {
              newArray.push(array[i][j])
            }
          }
        }
      }else{
        let lastTimesArray = array
        let testArray = fi.flattenOnce(lastTimesArray)

        while (lastTimesArray.join("") != testArray.join("")) {
          lastTimesArray = fi.flattenOnce(lastTimesArray)
          testArray = fi.flattenOnce(testArray)
        }
        return lastTimesArray
      }
      return newArray
    },

    flattenOnce: function(array) {
      let newArray = []
      for (let i = 0; i < array.length; i++){
        if (typeof array[i] != "object") {
          newArray.push(array[i])
        } else {
          for (let j=0; j < array[i].length; j++) {
            newArray.push(array[i][j])
          }
        }
      }
      return newArray
    },

    uniq: function(array, isSorted, callback) {
      const uniqArray = []
      const checkArray = []
      console.log(callback)
      for (let i=0; i < array.length; i++) {
        if (callback === undefined) {
          if (!uniqArray.includes(array[i])) {
            uniqArray.push(array[i])
          }
        } else {
          if (!checkArray.includes(callback(array[i]))) {
            checkArray.push(callback(array[i]))
            uniqArray.push(array[i])
          }
        }
      }
      return uniqArray
    },

    keys: function(object) {
      return Object.keys(object)
    },

    values: function(object) {
      const keys = Object.keys(object)
      const values = []
      for (let i = 0; i < keys.length; i++) {
        values.push(object[keys[i]])
      }
      return values
    },

    functions: function(object) {
      const keys = Object.keys(object).sort()
      const values = []
      for (let i = 0; i < keys.length; i++) {
        if (typeof object[keys[i]] == "function"){
          values.push(object[keys[i]])
        }
      }
      return values
    }
  }
})()

fi.libraryMethod()
fi.each()
