const socket = io("https://krishna2-backend.onrender.com");

    socket.on("connect", () => {
      console.log("Connected to server!");
    });

    socket.on("receive_message", (data) => {
      const item = document.createElement("li");
      item.textContent = data;
      messages.appendChild(item);
      messages.scrollTop = messages.scrollHeight;
    });

    const form = document.getElementById("form");
    const input = document.getElementById("input");
    const messages = document.getElementById("messages");

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (input.value) {
        socket.emit("send_message", input.value);   // Send message
        input.value = "";
      }
    });