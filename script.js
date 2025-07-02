 const tabButtons = document.querySelectorAll('#aboutTab button');

    tabButtons.forEach(button => {
      button.addEventListener('click', () => {
        const targetTextId = button.getAttribute('data-bs-target'); // #community-text
        const targetImageId = targetTextId.replace('-text', '-image'); // #community-image

        const allImagePanes = document.querySelectorAll('#aboutImageTabs .tab-pane');
        allImagePanes.forEach(pane => pane.classList.remove('active', 'show'));

        const targetImagePane = document.querySelector(targetImageId);
        if (targetImagePane) {
          targetImagePane.classList.add('active', 'show');
        }
      });
    });
  