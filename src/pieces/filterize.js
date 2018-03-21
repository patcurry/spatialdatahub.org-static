//import { featureEach } from '@turf/meta'

// This will be a set of functions that I probably just put into the map functions
// page
// It will allow point data to be filtered by feature
// Presumably multi polygon and multiline features will be filterable by this type
// of function as well
// This should be designed with a test file

const getFeaturePropertyKeys = geojsondata => {
// I didn't really like the way the turf function worked.
// Maybe I should stick with it, because I don't like the way my code looks, but
// at least I can see everything, and know that it works... so far
// it returns an array of the unique feature property keys
  const mySet = new Set()
  geojsondata.features
    .forEach(x => {
      Object.keys(x.properties)
        .forEach(x => mySet.add(x))
    })
  return Array.from(mySet)
}

const makeSelector = arr => {
  // make the selector here, populate it, then return it
  const selector = document.createElement('select')
  arr.forEach(prop => {
    const option = document.createElement('option') 
    const text = document.createTextNode(prop)
    option.value = prop
    option.appendChild(text)
    selector.appendChild(option)
  })
  return selector
}

const featurePropertiesInclude = (searchTerm, geojson) => {
  // filter features
  // if any of the  feature's properties include the string
  // or number argument, return that feature
  const correctFeatures = geojson.features.filter(feat => {
    const fp = feat.properties
    if (Object.keys(fp)
          .map(key => fp[key].toString().includes(searchTerm))
          .includes(true)
    ) { return feat }
  })
  return {
    "type": "FeatureCollection",
    "features": correctFeatures
  }
}

module.exports = {
  getFeaturePropertyKeys: getFeaturePropertyKeys,
  makeSelector: makeSelector,
  featurePropertiesInclude: featurePropertiesInclude
}
