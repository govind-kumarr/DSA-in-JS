function reverse(s) {
  if (s.length == 1) return s;
  return reverse(s.substring(1)) + s[0];
}

console.log(reverse("govind"));
