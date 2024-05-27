// Exercise #4
let getJohnProfile = () => {
  return new Promise(function (resolve) {
    setTimeout(
      () =>
        resolve({
          name: 'John',
          age: 20,
          hobbies: ['Coding', 'Football']
        }),
      1000
    );
  });
};
// Start coding here

const asyncFunction = async () => {
  try {
    let johnProfile = await getJohnProfile();
    console.log(johnProfile);
  } catch (err) {
    console.log(err);
  }
};

asyncFunction();

// let johnProfile = await getJohnProfile();
// console.log(johnProfile);
