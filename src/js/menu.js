(() => {
   const menuBtnRef = document.querySelector("[data-menu-button]");
   const mobileMenuRef = document.querySelector("[data-menu]");
   const mobileMenufill = document.querySelector("[change-fill]");
   const mobileBtnClose = document.querySelector("[data-menu-close]");

   menuBtnRef.addEventListener("click", () => {
      mobileMenuRef.classList.toggle("is-open");
      mobileMenufill.classList.toggle("fill");
   });
   
   mobileBtnClose.addEventListener("click", () => {
      mobileMenuRef.classList.toggle("is-open");
      mobileMenufill.classList.toggle("fill");
   });
})();