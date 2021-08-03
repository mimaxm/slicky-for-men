
      document.addEventListener("DOMContentLoaded", function() {
         const slinky = $('#slinky-menu').slinky({
            title: true,
         });

         $(document).mouseup(function (e) {
            var container = $("body");
            if (container.has(e.target).length === 0){
               menuBlock.classList.remove('_active');
               slinkyMenu.classList.remove('_active');
               body.style.overflow = 'auto';
            }
         });

         // closest js

         let openBtn = document.querySelector('.mobile-custom-menu-1');
         let closeBtn = document.querySelector('.slinky-close');
         let slinkyMenu = document.querySelector('.slinky-menu');
         let menuBlock = document.querySelector('.slinky-menu__block');
         let body = document.body;

         if (menuBlock) {
            openBtn.addEventListener('click', function () {
               slinkyMenu.classList.add('_active');
               menuBlock.classList.add('_active');
               body.style.overflow = 'hidden';
            })
            closeBtn.addEventListener('click', function () {
               menuBlock.classList.remove('_active');
               slinkyMenu.classList.remove('_active');
               body.style.overflow = 'auto';
            })
         }
      });