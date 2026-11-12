---
tag: BD6PTP7BR6
kind: problem
type: answer
answer: b\in[-14;14]
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=3173
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all values of the parameter $b$, for each of which there exists a number $a$ such that the system

$$
\left\{\begin{array}{l}
x^{2}+y^{2}+2 b(b+x+y)=81 \\
y=4 \cos (x+3 a)-3 \sin (x+3 a)
\end{array}\right.
$$

has at least one solution $(x ; y)$.
