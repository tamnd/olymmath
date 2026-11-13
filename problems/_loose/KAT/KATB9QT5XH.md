---
tag: KATB9QT5XH
kind: problem
type: answer
answer: "150"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=186175
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For each natural number $n \geq 1$, let $f_{n}$ be the function defined for all real $x \neq 0$ by

$$
f_{n}(x)=\frac{1-x}{x}+\frac{2^{2}-2 x}{x}+\frac{3^{2}-3 x}{x}+\ldots+\frac{n^{2}-n x}{x}
$$

a) Determine the zeros of the functions $f_{1}, f_{2}, f_{3}$, and $f_{4}$!

b) Prove: For each natural number $n \geq 1$, the function $f_{n}$ has exactly one zero! State this zero in terms of $n$!

c) Prove that there exists a natural number $n$ such that the zero of the function $f_{n}$ is greater than 100! Determine the smallest such number $n$!
