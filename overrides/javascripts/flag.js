keyboard$.subscribe(function(key) {
  if (key.mode === "global" && key.type === "x") {
    key.claim();
    window.location.href = "/blog";
  }
})
