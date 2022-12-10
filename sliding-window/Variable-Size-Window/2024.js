function maximizeConfusion(answerKey, k) {
  if (answerKey.length == k) return k;
  let i = 0,
    j = 0,
    max = 0,
    obj = { T: 0, F: 0 },
    len;
  while (j < answerKey.length) {
    obj[answerKey[j]]++;
    if (obj["T"] == k || obj["F"] == k) {
      len = obj["T"] + obj["F"];
      len > max ? (max = len) : null;
    } else if (obj["T"] > k && obj["F"] > k) {
      len = obj["T"] + obj["F"] - 1;
      len > max ? (max = len) : null;
      while (obj["T"] > k && obj["F"] > k) obj[answerKey[i++]]--;
    }

    j++;
  }
  return max;
}
maximizeConfusion("FFFTTFTTFT", 3);
