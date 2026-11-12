---
tag: GQJZXH0V9B
kind: problem
type: answer
answer: "1"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=20991
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove that for $n=6002$ the sum of binomial coefficients with a step of 6, i.e., $C_{n}^{1}+C_{n}^{7}+\ldots+C_{n}^{n-1}$, gives a remainder of 1 when divided by 3.

$C_{n}^{k}-$ the number of ways to choose $k$ items from $n$, which is $\frac{n!}{k!(n-k)!}$ if $0 \leqslant k \leqslant n$ and 0 in all other cases.
