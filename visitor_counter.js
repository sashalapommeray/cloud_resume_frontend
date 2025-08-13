function checkVisitor() {
  const visited = localStorage.getItem("visited") === "true";
  const counterEl = document.getElementById("counter");

  if (!visited) {
    fetch("https://44gkxl6irc.execute-api.us-east-1.amazonaws.com/Prod/counter", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ visited: false })
    })
    .then(res => res.json())
    .then(data => {
      localStorage.setItem("visited", "true");
      
      if (counterEl) {
        counterEl.innerText = data;
      }
    })
    .catch(err => {
      console.error("Failed to fetch counter:", err);
    });
  } 

  else {
    if (counterEl) {
      fetch("https://44gkxl6irc.execute-api.us-east-1.amazonaws.com/Prod/counter", {
        method: "GET"
      })
      .then(res => res.json())
      .then(data => counterEl.innerText = data)
      .catch(err => console.error("Failed to fetch counter:", err));
    }
  }
}

window.onload = checkVisitor;
