keyboard$.subscribe(function(key) {
  if (key.mode === "global" && key.type === "j") {
    key.claim();
    window.scrollBy({ top: 50, behavior: 'smooth' });
  }
  if (key.mode === "global" && key.type === "k") {
    key.claim();
    window.scrollBy({ top: -50, behavior: 'smooth' });
  }
})
