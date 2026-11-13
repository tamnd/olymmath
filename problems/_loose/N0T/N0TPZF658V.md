---
tag: N0TPZF658V
kind: problem
type: answer
answer: "256"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=103607
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Two quadratic equations with unequal leading coefficients:
$$
(a-1) x^{2}-\left(a^{2}+2\right) x+\left(a^{2}+2 a\right)=0
$$

and $(b-1) x^{2}-\left(b^{2}+2\right) x+\left(b^{2}+2 b\right)=0$
(where $a, b$ are positive integers) have a common root. Find the value of $\frac{a^{b}+b^{a}}{a^{-b}+b^{-a}}$.
