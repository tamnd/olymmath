---
tag: 3GFDPZTG0E
kind: problem
type: answer
answer: DX=\lambda
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=30658
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A random variable that takes the value $m$ with probability

$$
P_{m}(\lambda)=\frac{\lambda^{m} e^{-\lambda}}{m!}(m=0,1, \ldots, m, \ldots ; \lambda>0)
$$

is said to be distributed according to the Poisson distribution. Find the mathematical expectation and variance of this random variable.
