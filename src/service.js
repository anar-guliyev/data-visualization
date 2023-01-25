export const getData = cb => {
  return fetch("http://universities.hipolabs.com/search")
    .then(response => response.json())
    .then(data => {
      cb(data);
    });
};
