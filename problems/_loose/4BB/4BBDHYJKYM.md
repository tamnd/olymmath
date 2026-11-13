---
tag: 4BBDHYJKYM
kind: problem
type: answer
answer: e^2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=244076
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For $n\in\mathbb N$, define
$$a_n=\frac1{\binom n1}+\frac1{\binom n2}+\ldots+\frac1{\binom nn}.$$
(a) Prove that the sequence $b_n=a_n^n$ is convergent and determine the limit.
(b) Show that $\lim_{n\to\infty}b_n>\left(\frac32\right)^{\sqrt3+\sqrt2}$.
