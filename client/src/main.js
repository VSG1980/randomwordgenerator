document.getElementById("loadWordBtn").addEventListener("click", getPosts);

async function getPosts() {
  try {
    const response = await fetch(
      "https://randomwordgenerator.onrender.com/randomwords"
    );
    const data = await response.json();
    console.log("this is data", data);
    // if (!Array.isArray(data) || data.length === 0 || !Array.isArray(data[0])) {
    //   console.error("Data is not in expected nested array format");
    //   return;
    // } This code is from a youtube video.

    const innerArray = data[0];
    const randomIndex = Math.floor(Math.random() * innerArray.length);
    const randomWord = innerArray[randomIndex];

    renderDataOntoPage(randomWord);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

function renderDataOntoPage(wordData) {
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = "";

  const word = document.createElement("h2");
  const definition = document.createElement("p");
  const example = document.createElement("p");

  word.textContent = `Word: ${wordData.word || "N/A"}`;
  definition.textContent = `Definition: ${wordData.definition || "N/A"}`;
  example.textContent = `Example: ${wordData.example || "N/A"}`;

  const randomColor = getRandomBrightColor();
  word.style.color = randomColor;
  definition.style.color = randomColor;
  example.style.color = randomColor;

  resultsDiv.appendChild(word);
  resultsDiv.appendChild(definition);
  resultsDiv.appendChild(example);
}

function getRandomBrightColor() {
  const hue = Math.floor(Math.random() * 360);
  return `hsl(${hue}, 70%, 75%)`;
}
