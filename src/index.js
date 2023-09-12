document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#create-task-form");

  function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Access the input element and its value
    const input = document.querySelector("#new-task-description");
    const inputValue = input.value;

    // Do something with the input value (for example, display it)
    alert("You entered: " + inputValue);

    // You can also submit the form using JavaScript if needed
    // form.submit();
  }

  // Add the event listener to the form
  form.addEventListener("submit", handleSubmit);
});
