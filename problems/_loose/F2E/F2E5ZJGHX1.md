---
tag: F2E5ZJGHX1
kind: problem
type: answer
answer: (1, 1, 2), (2, 3, 3), (2, 2, 5)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Slovenia/train/0001.parquet#row=157
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all triples of positive integers $(a, b, p)$ such that $p$ is a prime and
$$
\frac{5^a + 2^b p}{5^a - 2^b p}
$$
is a perfect square of a positive integer.
