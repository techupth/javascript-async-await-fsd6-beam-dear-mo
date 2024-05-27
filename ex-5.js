// Exercise #5
let getJohnProfile = () => {
  return new Promise(function (_, reject) {
    setTimeout(
      () =>
        reject({
          errorCode: 500,
          message: '👿 Failed to request data from server'
        }),
      2000
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
