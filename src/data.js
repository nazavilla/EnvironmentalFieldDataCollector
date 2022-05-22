//asynchrounously fetching recently cities added
  //retrieving json data

export async function fetchCityData() {
  const response = await fetch("data/cityData.json");
  return await response.json();
}

