(function() {
  const state = {
    menu: {
      open: false,
    }
  };
  
  function toggleMenu() {
    const open = state.menu.open;
    const button = d3.select('nav div > button');
    const menu = d3.select('nav > ul');

    if(!open) {
      button.classed('rotated', true);
      menu.classed('open', true);
    } else {
      button.classed('rotated', false);
      menu.classed('open', false);
    }

    state.menu.open = !open;
  }

  window.__toggleMenu = toggleMenu;
})();
