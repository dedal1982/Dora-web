document.addEventListener("DOMContentLoaded", function () {
  const taskInfoSelectItems = document.querySelectorAll(".task-info-select li");
  const skillsPages = document.querySelectorAll(".skills__page");

  taskInfoSelectItems.forEach((item) => {
    item.addEventListener("click", function () {
      const tabId = this.getAttribute("data-tab");

      // Удаляем класс "active" у всех li
      taskInfoSelectItems.forEach((li) => li.classList.remove("active"));

      // Добавляем класс "active" к текущему li
      this.classList.add("active");

      // Удаляем класс "active" у всех skills__page
      skillsPages.forEach((page) => page.classList.remove("active"));

      // Добавляем класс "active" к соответствующему skills__page
      document
        .querySelector(`.skills__page[data-page="${tabId}"]`)
        .classList.add("active");
    });
  });
});
