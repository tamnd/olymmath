---
tag: AV011H0MYC
kind: problem
type: answer
answer: \frac{100}{243}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=132272
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
If the sum of the points that appear in these $n$ dice rolls is greater than $2^{n}$, then it counts as passing. Ask:
(1) What is the maximum number of levels a person can pass in this game?
(2) What is the probability that he can pass the first three levels consecutively?
(Note: A die is a uniform cube with 1, 2, 3, 4, 5, 6 points on each of its faces. The number of points on the face that lands up after the die is rolled and comes to rest is the number of points that appear.)
