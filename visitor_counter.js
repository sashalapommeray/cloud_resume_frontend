function checkVisitor() {
  const visited = localStorage.getItem("visited") === "true";

  fetch("https://javzxejl8e.execute-api.us-east-1.amazonaws.com/dev/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ visited: visited })
  })
  .then(res => res.json())
  .then(data => {
    document.getElementById("counter").innerText = data;
    if (!visited) {
      localStorage.setItem("visited", "true");
    }
  })
  .catch(err => console.error("Failed to fetch counter:", err));
}

window.onload = checkVisitor;