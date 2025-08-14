function checkVisitor() {
  const visited = localStorage.getItem("visited") === "true";
  const counterEl = document.getElementById("counter");
  const messageEl = document.getElementById("visitor-message");

  console.log("Visited?", visited);
  console.log("Message element found?", !!messageEl);


  if (messageEl) {
    messageEl.innerText = visited
      ? "Total visitors:"
      : "You are visitor number";
    console.log("Message set to:", messageEl.innerText);
  }

  if (!visited) {
    fetch("https://44gkxl6irc.execute-api.us-east-1.amazonaws.com/Prod/counter", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ visited: false })
    })
      .then(res => res.json())
      .then(data => {
        localStorage.setItem("visited", "true");
        if (counterEl) counterEl.innerText = data;
      })
      .catch(err => console.error("Failed to fetch counter:", err));
  } else {
    fetch("https://44gkxl6irc.execute-api.us-east-1.amazonaws.com/Prod/counter", {
      method: "GET"
    })
      .then(res => res.json())
      .then(data => {
        if (counterEl) counterEl.innerText = data;
      })
      .catch(err => console.error("Failed to fetch counter:", err));
  }
}

window.onload = checkVisitor;
