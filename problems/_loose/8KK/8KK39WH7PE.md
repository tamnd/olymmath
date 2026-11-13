---
tag: 8KK39WH7PE
kind: problem
type: answer
answer: \frac{\sqrt{3}}{3}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=87561
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For each natural number $n$, let $a_{n}$ and $b_{n}$ be real numbers such that $(\sqrt{3}+i)^{n}=a_{n}+i b_{n}$. Prove that the expression

$$
\frac{a_{n} b_{n+1}-a_{n+1} b_{n}}{a_{n+1} a_{n}+b_{n+1} b_{n}}
$$

takes the same value for all $n \in \mathbb{N}$ and determine that value.
