function friendPairing(n) {
  if (n <= 1) return 1;
  if (n == 2) return 2;

  return 2 + friendPairing(n - 2);
}

console.log(friendPairing2(3));

function friendPairing2(n) {
  if (n < 0) return 0;
  if (n == 0 || n == 1) return 1;
  if (n == 2) return 2;

  return friendPairing2(n - 1) + (n - 1) * friendPairing2(n - 2);
}
