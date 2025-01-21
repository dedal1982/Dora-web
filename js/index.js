document.addEventListener("DOMContentLoaded", function () {
  const taskInfoSelectItems = document.querySelectorAll(".task-info-select li");
  const skillsPages = document.querySelectorAll(".skills__page");

  taskInfoSelectItems.forEach((item) => {
    item.addEventListener("click", function () {
      const tabId = this.getAttribute("data-tab");

      taskInfoSelectItems.forEach((li) => li.classList.remove("active"));

      this.classList.add("active");

      skillsPages.forEach((page) => page.classList.remove("active"));

      document
        .querySelector(`.skills__page[data-page="${tabId}"]`)
        .classList.add("active");
    });
  });
});
