const person = {
  found: 2,
  message: "Found 2 persons",
  result: [
    {
      name: {
        common: "John",
        fullName: ["John", "Doe"]
      },
      age: 32,
      isMale: false,
      address: {
        street: "13/A St Joseph",
        house: 10,
      },
    },
    {
      name: {
        common: "Humayoun",
        fullName: ["Humayoun", "Kabir"]
      },
      age: 33,
      isMale: false,
      address: {
        street: "13/A St Lucia",
        house: 11,
      },
    },
  ]
};

const profileSection = document.getElementById("profile");
// 1st Person:
const profileDiv1 = document.createElement('div');
profileDiv1.innerHTML = `
  <div class="col">
    <div class="card h-100">
      <div class="card-header">
        <h6>Person Name: ${person.result[0].name.common}</small>
      </div>
      <div class="card-body">
          <p class="card-text">age: ${person.result[0].age}</h5>
          <p class="card-text">Street: ${person.result[0].address.street}, House No.: ${person.result[0].address.house}</p>
      </div>
    </div>
  </div>
`;
profileSection.appendChild(profileDiv1);

// 2nd Person:
const profileDiv2 = document.createElement('div');
profileDiv2.innerHTML = `
  <div class="col">
    <div class="card h-100">
      <div class="card-header">
        <h6>Person Name: ${person.result[1].name.common}</h6>
      </div>
      <div class="card-body">
          <p class="card-text">age: ${person.result[1].age}</h5>
          <p class="card-text">Street: ${person.result[1].address.street}, House No.: ${person.result[1].address.house}</p>
      </div>
    </div>
  </div>
`;
profileSection.appendChild(profileDiv2);

// const name1 = person.result[0].address.street;
// console.log(name1);
