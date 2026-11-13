---
tag: 1DEBFZP68A
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=264000
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Define a sequence of positive rational numbers $x_0, x_1, x_2, x_3, \cdots$ by $x_0 = 2, x_1 = 3,$ and
for all $n \geq 2,$
$$x_n = \frac{x_{n-1}^2 + 5}{x_{n-2}}$$
(a) Prove that $x_n$ is an integer for all $n \geq 0.$
(b) Prove that if $x_n$ is prime, then either $n = 0$ or $n = 2^k$ for some integer $k \geq 0.$
