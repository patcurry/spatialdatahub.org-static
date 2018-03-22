import { feature, featureCollection } from '@turf/helpers';
// ////////// //
// editMap.js //
// ////////// //
// /////////////////////////////////////////////////////////////////////////
// nominatim
// /////////////////////////////////////////////////////////////////////////

const showPlaceContainer = function (container) {
    container.style.display === 'none' || container.style.display === ''
        ? container.style.display = 'block'
        : container.style.display = 'none';
}

// this must take a layer!!!!!!!
// using 'sp' as 'selectedPlace' because that variable is being used elsewhere.
// best to use variable names only once.
const getSelectedPlacePolygon = function (sp) {
    if (sp[0]) {
        // this is very specific to geojson structure
        const selectedPlaceType = sp[0].toGeoJSON().features[0].geometry.type;
        return selectedPlaceType === 'Polygon' || selectedPlaceType === 'MultiPolygon'
            ? sp[0].toGeoJSON()
            : 'not a polygon';
    } else {
        return 'not a polygon';
    }
};

// this one isn't working yet
/*
  const makeSelectorOptions = function (arr, sel, ppl) {
  sel.innerHTML = ''

  arr.forEach(place => {
  const option = document.createElement('option')
  option.value = place.display_name
  const text = document.createTextNode(place.display_name)
  option.appendChild(text)
  sel.appendChild(option)
  })

  const lyr = L.geoJSON(place.geojson)
  possiblePlaceLayers[place.display_name] = layer
  }
*/

/*
// (2) get elements
const placeInput = document.getElementById('place_input')
const placeButton = document.getElementById('place_button')
const placeToggle = document.getElementById('place_toggle')
const selector = document.getElementById('selector')
const selectButton = document.getElementById('select_button')

// define containers
const possiblePlaceLayers = {} // this is where i keep the layers to query the map with
const selectedPlace = []

activeDatasetButtons.push(placeButton, placeToggle, selectButton)

function makeSelectorOptions (array) {
selector.innerHTML = ''
array.forEach(place => {
const option = document.createElement('option')
option.value = place.display_name
const text = document.createTextNode(place.display_name)
option.appendChild(text)
selector.appendChild(option)

const lyr = L.geoJson(place.geojson)
possiblePlaceLayers[place.display_name] = lyr
})
}

// add place(s) to the selector
placeButton.addEventListener('click', function findPlace () {
const val = placeInput.value
en.getPlaceData(val, makeSelectorOptions)
})

// select place to display
selectButton.addEventListener('click', function selectPlace () {

Object.keys(possiblePlaceLayers).forEach(n => {
const p = possiblePlaceLayers[n]
myMap.removeLayer(p)
})

selectedPlace.length !== 0
? (selectedPlace.pop(), selectedPlace.push(possiblePlaceLayers[selector.value]))
: selectedPlace.push(possiblePlaceLayers[selector.value])

const lyr = selectedPlace[0]
lyr.addTo(myMap)
myMap.fitBounds(lyr.getBounds())
})

// map and layer should be arguements for a predefined function
placeToggle.addEventListener('click', () => {
myMap.hasLayer(selectedPlace[0])
? myMap.removeLayer(selectedPlace[0])
: myMap.addLayer(selectedPlace[0])
})
*/
// /////////////////////////////////////////////////////////////////////////
// end nominatim
// /////////////////////////////////////////////////////////////////////////

module.exports = {
    showPlaceContainer: showPlaceContainer,
    getSelectedPlacePolygon: getSelectedPlacePolygon
    //  makeSelectorOptions: makeSelectorOptions
};
