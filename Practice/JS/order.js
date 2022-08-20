var list = document.querySelector("ol");
for (var i = list.children.length; i >= 0; i--) {
  list.appendChild([(Math.random() * 100) | 1]);
}
