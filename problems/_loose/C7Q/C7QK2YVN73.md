---
tag: C7QK2YVN73
kind: problem
type: answer
answer: \in[-18;18]
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=3168
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all values of the parameter $a$, for each of which there exists a number $b$ such that the system

$$
\left\{\begin{array}{l}
x^{2}+y^{2}+2 a(a-x-y)=64 \\
y=8 \sin (x-2 b)-6 \cos (x-2 b)
\end{array}\right.
$$

has at least one solution $(x ; y)$.
