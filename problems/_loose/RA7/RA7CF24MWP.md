---
tag: RA7CF24MWP
kind: problem
type: answer
answer: t_{n}+1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=142159
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given $P_{n}(x)=\sum_{1 \leqslant 2 k+1 \leq n} C_{n}^{2 k+1} x^{n-2 k-1}\left(x^{2}-1\right)^{k-1}$. $S_{n}$ is the sum of the absolute values of the coefficients of the polynomial $P_{n}(x)$. For any positive integer $n$, find the exponent of 2 in the prime factorization of $S_{n}$.
