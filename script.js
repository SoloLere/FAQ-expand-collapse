const faqButton = document.querySelectorAll(".faq-toggle");

// I want to remove or add the active class whenever the toggle{chevron or times} icon is clicked
// all the toggle buttons are in faqButton array
faqButton.forEach((button) =>
  button.addEventListener("click", () => {
    // if the botten is clicked, select the parent "faq"
    // Add active class to parent if it does not have an active class else remove active class from parent if it already has active class
    const parent = button.closest(".faq");
    parent.classList.toggle('active');
    // parent.classList.contains("active")
    //   ? parent.classList.remove("active")
    //   : parent.classList.add("active");
  })
);
