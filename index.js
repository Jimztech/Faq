document.addEventListener("DOMContentLoaded", () => {
    const faqAccordions = document.querySelectorAll(".faq-accordion");
  
    faqAccordions.forEach((accordion) => {
      const question = accordion.querySelector(".faq-question");
      const plusIcon = accordion.querySelector(".plus-icon");
      const answer = document.getElementById(question.getAttribute("aria-controls"));
  
      // Handle toggle when question or icon is clicked
      const toggleFAQ = () => {
        const isExpanded = question.getAttribute("aria-expanded") === "true";
  
        // Toggle aria-expanded
        question.setAttribute("aria-expanded", !isExpanded);
  
        // Toggle answer visibility
        if (isExpanded) {
          answer.classList.remove("visible");
          plusIcon.src = "./assets/images/icon-plus.svg"; // Switch back to plus icon
        } else {
          answer.classList.add("visible");
          plusIcon.src = "./assets/images/icon-minus.svg"; // Switch to minus icon
        }
      };
  
      // Add event listeners for both the question and the plus icon
      question.addEventListener("click", toggleFAQ);
      plusIcon.addEventListener("click", toggleFAQ);

      // Keyboard navigation
      question.addEventListener("keydown", (event) => {
        switch (event.key) {
          case "ArrowDown": // Move to the next question
            event.preventDefault();
            const nextIndex = (index + 1) % faqAccordions.length;
            faqAccordions[nextIndex].querySelector(".faq-question").focus();
            break;
  
          case "ArrowUp": // Move to the previous question
            event.preventDefault();
            const prevIndex = (index - 1 + faqAccordions.length) % faqAccordions.length;
            faqAccordions[prevIndex].querySelector(".faq-question").focus();
            break;
  
          case "Enter": // Toggle FAQ on Enter key
          case " ": // Toggle FAQ on Space key
            event.preventDefault();
            toggleFAQ();
            break;
        }
      });
    });
});



