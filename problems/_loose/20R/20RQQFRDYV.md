---
tag: 20RQQFRDYV
kind: problem
type: answer
answer: \frac{-q+\sqrt{q^{2}+4p}}{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=138835
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given positive real numbers $p, q$. It is known that the sequence of positive real numbers $\left\{a_{n}\right\}$ satisfies:
$$
a_{0}=1, a_{n+2}=p a_{n}-q a_{n+1}(n \in \mathbf{N}) .
$$

Find all possible values of $a_{1}$ (expressed in terms of $p, q$).
