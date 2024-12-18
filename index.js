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
    });
});
  