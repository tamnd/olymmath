---
tag: 455YCTDYAD
kind: problem
type: answer
answer: \frac{\sqrt{b^2-^2}}{\arccos\frac{}{b}}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=83710
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $0<a \leqslant b$. We define the sequences $\left(a_{n}\right)$ and $\left(b_{n}\right)$ by $a_{0}=a, b_{0}=b$, and the following recurrence relations:

$$
a_{n+1}=\frac{a_{n}+b_{n}}{2}, b_{n+1}=\sqrt{a_{n+1} b_{n}}
$$

Show that the sequences $\left(a_{n}\right)$ and $\left(b_{n}\right)$ converge to a common limit and determine this limit (or, if you are not comfortable with limits, determine an explicit expression for $\left(a_{n}\right)$ and $\left(b_{n}\right)$, after all, that's what's most interesting).
