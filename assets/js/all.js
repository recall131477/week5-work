"use strict";

(function ($) {
  var changeItem = function changeItem() {
    // 切換section顯示不同sidebar__list li內容
    var index = 0;
    $('.section').eq(index).show();
    $('.sidebar__list li').on('click', function () {
      index = $(this).index();
      $('.section').hide();
      $('.section').eq(index).fadeIn();
      $('.sidebar__list li').removeClass('is-active');
      $('.sidebar__list li').eq(index).addClass('is-active');
    });
  };

  var goModal = function goModal() {
    var modal = document.querySelector('.modal'); // 開啟reply-modal

    $('.reply-modal__open').on('click', function () {
      $('.reply-modal').addClass('is-active');
    }); // 切換view-modal的verified

    $('.view-modal__verified').on('click', function () {
      $('.view-modal__status').slideToggle();
      $('.view-modal__verified').toggleClass('is-active');
    }); // 開啟view-modal

    $('.view-modal__open').on('click', function () {
      $('.view-modal').addClass('is-active');

      if (modal) {
        document.body.style.overflow = 'hidden';
      }
    }); // 開啟edit-modal

    $('.edit-modal__open').on('click', function () {
      $('.edit-modal').addClass('is-active');

      if (modal) {
        document.body.style.overflow = 'hidden';
      }
    }); // new-modal

    $('.new-modal__open').on('click', function () {
      $('.new-modal').addClass('is-active');

      if (modal) {
        document.body.style.overflow = 'hidden';
      }
    }); // 關閉modal

    $('.modal-close').on('click', function () {
      $('.reply-modal').removeClass('is-active');
      $('.view-modal').removeClass('is-active');
      $('.edit-modal').removeClass('is-active');
      $('.new-modal').removeClass('is-active');
      document.body.style.overflow = 'visible';
    });
  };

  $(function () {
    changeItem();
    goModal();
  });
})(jQuery);
//# sourceMappingURL=all.js.map
