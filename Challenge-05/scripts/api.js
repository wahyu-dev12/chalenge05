async function getAllCar() {
  const response = await fetch(
    BASE_URL + '/car'
  );
  const body = await response.json();
  return body
}

async function deleteCar(id) {
  const response = await fetch(
    BASE_URL + '/car/' + id,
    { method: 'DELETE' }
  );
  const body = await response.json();
  return body
}

async function createCar(body = {}) {
  var formData = new FormData();
  if (typeof body === 'object') {
    Object.entries(body).map(([key, value]) => formData.append(key, value))
  }

  const response = await fetch(BASE_URL + '/car', {
    method: 'POST',
    body: formData
  });

  const res = await response.json();
  return res
}

async function updateCar(id, body = {}) {
  var formData = new FormData();
  if (typeof body === 'object') {
    Object.entries(body).map(([key, value]) => formData.append(key, value))
  }

  const response = await fetch(BASE_URL + '/car/' + id , {
    method: 'PUT',
    body: formData
  });

  const res = await response.json();
  return res
}