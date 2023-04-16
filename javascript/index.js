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
const elementToUpdate = document.querySelector('#mashedPotatoes');
function getInstruction(step, callback, errorCallback, elementToUpdate) {
  setTimeout(() => {
    const instruction = mashedPotatoes[step];
    if (!instruction) {
      errorCallback("Instructions not found.");
    } else {
      callback(instruction);
      const li = document.createElement('li');
      li.textContent = instruction;
      elementToUpdate.appendChild(li);
    }
  }, 1000);
}
getInstruction(0, (step1) => {
  console.log(step1);
  getInstruction(1, (step2) => {
    console.log(step2);
    getInstruction(2, (step3) => {
      console.log(step3);
      getInstruction(3, (step4) => {
        console.log(step4);
        getInstruction(4, (step5) => {
          console.log(step5);
          getInstruction(5, () => {
            const mashedPotatoesReady = document.createElement("li");
            mashedPotatoesReady.textContent = "Mashed potatoes are ready!";
            console.log(mashedPotatoesReady);
            elementToUpdate.appendChild(mashedPotatoesReady);
            console.log(getInstruction);
          }, (error) => console.log(error), elementToUpdate);
        }, (error) => console.log(error), elementToUpdate);
      }, (error) => console.log(error), elementToUpdate);
    }, (error) => console.log(error), elementToUpdate);
  }, (error) => console.log(error), elementToUpdate);
}, (error) => console.log(error), elementToUpdate);

// Iteration 2 - using promises
// ...
function getSteak(step, elementtoUpdate) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (!steak[step]) reject("Instructions not found.")
      else {
        elementtoUpdate.innerHTML += `<li>${steak[step]}</li>`
        console.log(steak[step]);
        resolve();
      }
    }, 1000);
  })
};
const steakInstructions = document.querySelector("#steak");
getSteak(0, steakInstructions)
  .then(() => getSteak(1, steakInstructions))
  .then(() => getSteak(2, steakInstructions))
  .then(() => getSteak(3, steakInstructions))
  .then(() => getSteak(4, steakInstructions))
  .then(() => getSteak(5, steakInstructions))
  .then(() => getSteak(6, steakInstructions))
  .then(() => getSteak(7, steakInstructions))
  .catch((err) => console.log(err));


// Iteration 3 using async/await
// ...

function makeBroccoli(step, elementToUpdate) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log(broccoli[step]);
      if (!broccoli[step]) reject("Instructions not found.")
      else {
        elementToUpdate.innerHTML += `<li>${broccoli[step]}</li>`
        resolve();
      }
    }, 1000);
  })
};

async function getBroccoli() {
  try {
    const broccoliIntructions = document.querySelector("#broccoli");
    await makeBroccoli(0, broccoliIntructions);
    await makeBroccoli(1, broccoliIntructions);
    await makeBroccoli(2, broccoliIntructions);
    await makeBroccoli(3, broccoliIntructions);
    await makeBroccoli(4, broccoliIntructions);
    await makeBroccoli(5, broccoliIntructions);
    await makeBroccoli(6, broccoliIntructions);
  } catch (error) {
    console.log("Something went wrong");
  }
}
getBroccoli();


// Bonus 2 - Promise all
// ...

