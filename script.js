const number = document.getElementById("number");
const stash = document.getElementById("yes");
const leave = document.getElementById("no");
const stashed = document.getElementById("stashedNum");
const closeBtn = document.getElementById("modalCloseBtn");
const score = document.getElementById("score");
let i = 0;

let nums = [];
for (let n = 0; n < 8; n++) {
  nums.push(Math.floor(Math.random() * 20) + 1);
}

let stashedNums = [];
let total = 0;
let noes = 0;
let yesses = 0;

number.innerText = nums[i];
stashed.innerText = `[${stashedNums}], Total=${total}`;

function stashNum() {
  yesses++;
  stashedNums.push(nums[i]);
  total += nums[i];
  i++;
  number.innerText = nums[i];
  stashed.innerText = `[${stashedNums}], Total=${total}`;

  if (yesses === 5) {
    openModal();
  }
}

function leaveNum() {
  i++;
  number.innerText = nums[i];
  noes++;
  if (noes === 3) {
    while (stashedNums.length < 5) {
      total += nums[i];
      stashedNums.push(nums[i]);
      i++;
      openModal();
    }
  }
}

function restartGame() {
  yesses = 0;
  noes = 0;
  i = 0;
  nums = [];
  stashedNums = [];
  total = 0;
  for (let n = 0; n < 8; n++) {
    nums.push(Math.floor(Math.random() * 20) + 1);
  }
  number.innerText = nums[i];
  stashed.innerText = `[${stashedNums}], Total=${total}`;
}
function closeModal() {
  modal.style.display = "none";
  restartGame();
}

function openModal() {
  modal.style.display = "block";
  score.innerText = `[${stashedNums}], Total=${total}\n GAME OVER`;
}

stash.addEventListener("click", stashNum);
leave.addEventListener("click", leaveNum);
closeBtn.addEventListener("click", closeModal);
