const text1Input = document.getElementById("text1");
const text2Input = document.getElementById("text2");
const resultElement = document.getElementById("result");
const calculateBtn = document.getElementById("calculateButton");

let calculateSimilarity = (text1, text2) => {
  const token1 = text1.split("");
  const token2 = text2.split("");

  //   console.log(token1, token2);

  const set1 = new Set(token1);
  const set2 = new Set(token2);

  const o = (intersection = new Set([...set1].filter((x) => set2.has(x))));

  const union = new Set([...set1, ...set2]);

  const similarity = (intersection.size / union.size) * 100;

  return similarity;
};

calculateBtn.addEventListener("click", () => {
  const text1 = text1Input.value;
  const text2 = text2Input.value;

  const similarity = calculateSimilarity(text1, text2);

  resultElement.textContent = similarity.toFixed(2);
});
