console.log('getting json data');
$.getJSON("cars.json",
functions(cars) {
  console.log('got the JSON');
}
)
