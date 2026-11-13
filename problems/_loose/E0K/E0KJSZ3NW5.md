---
tag: E0KJSZ3NW5
kind: problem
type: answer
answer: Least sum of digits is 9; attained for p = 2 and p = 5.
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Slovenia/train/0000.parquet#row=182
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: si-mo/2008
    source: hf-mathnet
    label: Slovenia Slovenija 2008
---
Let $n = (p^2 - 1)(p^2 - 4) + 9$. Assuming $p$ is a prime number, what is the least possible sum of the digits of $n$? Find all prime numbers $p$ for which this value is attained.
