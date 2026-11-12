---
tag: S0CY5ANZ6D
kind: problem
type: answer
answer: E(X)=np,\;D(X)=npq
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=30657
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A random variable $X$, which takes the value $m$ with probability

$$
P_{m n}=C_{n}^{m} p^{m} q^{n-m}(0 \leqslant p \leqslant 1 ; p+q=1 ; m=0,1, \ldots, n),
$$

is called binomial. Find the mathematical expectation and variance of such a random variable.
