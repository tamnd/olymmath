---
tag: ZYK0K5GDPN
kind: problem
type: answer
answer: n^{2}(n-1)^{k-2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=86120
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider an alphabet of $n$ letters, with which we will form words. We will say that a word contains a palindrome if a segment of that word, of more than one letter, reads the same forwards as backwards. For example, the word OLIMPIADAS contains the palindrome ADA. Given an integer $k$ greater than 2, determine how many words of length $k$ can be formed, with our alphabet of $n$ letters, that do not contain any palindrome of odd length.
