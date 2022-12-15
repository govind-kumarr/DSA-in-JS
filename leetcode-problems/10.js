var isMatch = function (s, p) {
  if (s.length > p.length) return false;

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

  return true;
};
