let j = p.length - 1,
  pstack = [];
while (j >= 0) {
  if (pstack.length == 0) pstack.push(p[j]);
  else if (pstack[pstack.length - 1] == "*") {
    pstack.pop();
    pstack.push(p[j]);
    pstack.push(p[j]);
  } else pstack.push(p[j]);
  j--;
}
j = p.length - 1;
while (j >= 0) {
  if (pstack[j] == ".") {
  } else if (pstack[j] == "*") return false;
  else if (pstack[j] != s[j]) return false;
  j--;
}
