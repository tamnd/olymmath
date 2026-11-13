---
tag: 5WEBNWHRCS
kind: problem
type: answer
answer: \frac{2r^{4}}{|(t_{1}+t_{2})(t_{2}+t_{3})(t_{3}+t_{1})|}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=138432
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\triangle A B C$ have its incircle center at the origin, with radius $r$, touching $B C, C A, A B$ at $D, E, F$, respectively. The complex numbers corresponding to $D, E, F$ are $t_{1}, t_{2}, t_{3}$. Try to express the circumradius $R$ of $\triangle A B C$ using $r, t_{1}, t_{2}, t_{3}$.
