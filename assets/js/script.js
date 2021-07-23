var grid1 = new Muuri('.grid-1', {
    dragEnabled: true,
    dragContainer: document.body,
  
  });
  
  var grid2 = new Muuri('.grid-2', {
    dragEnabled: false,
    layout: {
      alignBottom: true,
    }
  });
  
  
  // When all items have loaded refresh their
  // dimensions and layout the grid.
   window.addEventListener('load', function () {
     grid1.refreshItems().layout();
    // For a little finishing touch, let's fade in
    // the images after all them have loaded and
    // they are corrertly positioned.
    document.body.classList.add('images-loaded');
  });
  