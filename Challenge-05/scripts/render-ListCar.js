async function renderListCar() {
  const body = await getAllCar();
  carContainerElement = document.getElementById("cars-container");
  body.cars.forEach((car) => {
    const node = document.createElement("div");
    node.innerHTML = `
        <div class="col">
          <div class="card p-2" style="width: 21rem">
            <div class="p-4 pb-0">
              <img src="${car.picture}" class="card-img-top" height="160px" alt="..." />
            </div>
            <div class="card-body">
              <p class="card-text">${car.name}</p>
              <h5 class="card-title fw-bolder">${car.price} / hari</h5>
              <p class="card-text d-flex align-items-center gap-1">
                <img src="Assets/fi_clock.svg" alt="..." />
                Update at ${car.createdAt}
              </p>
              <div class="d-flex gap-2">
                <div class="w-50">
                  <a href="#?id=${car._id}">
                    <button type="button"
                      class="btn btn-outline-danger btn-binar-danger d-flex align-items-center justify-content-center gap-1 w-100"
                      data-bs-toggle="modal" data-bs-target="#staticBackdrop" data-bs-id=${car._id}>
                      <img src="Assets/fi_trash-2.svg" alt="..." />
                      Delete
                    </button>
                  </a>
                </div>
                <div class="w-50">
                  <a href="edit-car.html?id=${car._id}">
                    <button type="button"
                      id="editCar"
                      class="btn btn-success btn-binar-success d-flex align-items-center justify-content-center gap-1 w-100">
                      <img src="Assets/fi_edit.svg" alt="..." />
                      Edit
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
    this.carContainerElement.appendChild(node);
  });
}

renderListCar();
