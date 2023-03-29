// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
// getInstruction("mashedPotatoes", 0, (step1) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 1, (step2) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 2, (step3) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 3, (step4) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 4, (step5) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
//   document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
// }, (error) => console.log(error));

// Iteration 1 - using callbacks
// ...

function getInstruction(step, callback, errorCallback, elementToUpdate) {
  setTimeout(() => {
    const instruction = mashedPotatoes[step];
    if (!instruction) {
      errorCallback("Instructions not found.");
    } else {
      callback(instruction);
      elementToUpdate.innerHTML += `<li>${instruction}</li>`;
    }
  }, 1000);
}

// Callbacks in sequence

getInstruction(0, (step1) => {
  console.log(step1);
}, (error) => console.log(error), document.querySelector("#mashedPotatoes"));
getInstruction(1, (step2) => {
  console.log(step2);
}, (error) => console.log(error), document.querySelector("#mashedPotatoes"));
getInstruction(2, (step3) => {
  console.log(step3);
}, (error) => console.log(error), document.querySelector("#mashedPotatoes"));
getInstruction(3, (step4) => {
  console.log(step4);
}, (error) => console.log(error), document.querySelector("#mashedPotatoes"));
getInstruction(4, (step5) => {
  console.log(step5);
}, (error) => console.log(error), document.querySelector("#mashedPotatoes"));

// Iteration 2 - using promises
// ...

function getSteak(step, elementtoUpdate) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log(steak[step]);
      if (!steak[step]) reject("Instructions not found.")
      else {
        elementtoUpdate.innerHTML += `<li>${steak[step]}</li>`
        resolve();
      }
    }, 1000);
  })
};

const steakList = document.querySelector("#steak");
getSteak(0, steakList)
  .then(() => getSteak(1, steakList))
  .then(() => getSteak(2, steakList))
  .then(() => getSteak(3, steakList))
  .then(() => getSteak(4, steakList))
  .then(() => getSteak(5, steakList))
  .then(() => getSteak(6, steakList))
  .then(() => getSteak(7, steakList))
  .catch((err) => console.log(err));

// Iteration 3 using async/await
// ...

function brusselsSproutsSteps(step, elementtoUpdate) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log(brusselsSprouts[step]);
      if (!brusselsSprouts[step]) reject("Instructions not found.")
      else {
        elementtoUpdate.innerHTML += `<li>${brusselsSprouts[step]}</li>`
        resolve();
      }
    }, 1000);
  })
};

async function getBrusselsSprouts() {
  try {
    const brusselsSproutsInstructions = document.getElementById("brusselsSprouts");
    await brusselsSproutsSteps(0, brusselsSproutsInstructions);
    await brusselsSproutsSteps(1, brusselsSproutsInstructions);
    await brusselsSproutsSteps(2, brusselsSproutsInstructions);
    await brusselsSproutsSteps(3, brusselsSproutsInstructions);
    await brusselsSproutsSteps(4, brusselsSproutsInstructions);
    await brusselsSproutsSteps(5, brusselsSproutsInstructions);
    await brusselsSproutsSteps(6, brusselsSproutsInstructions);
    await brusselsSproutsSteps(7, brusselsSproutsInstructions);
  } catch (error) {
    console.log("Something went wrong");
  }
}
getBrusselsSprouts();

// Bonus 2 - Promise all
// ...

