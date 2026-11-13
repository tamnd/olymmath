---
tag: VX3Z9KWVRX
kind: problem
type: answer
answer: x_{1}=2,x_{2}=3,x_{3}=6;\,x_{1}=2,x_{2}=4,x_{3}=4;\,x_{1}=3,x_{2}=3,x_{3}=3
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=182499
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine all solutions of the equation

$$
\sum_{i=1}^{3} \frac{1}{x_{i}}=1
$$

in natural numbers $x_{i}$, such that $x_{i} \geq x_{j}$ if $i>j$.
