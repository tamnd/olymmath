---
tag: 7RKXYGW76X
kind: problem
type: answer
answer: b\in[-11;2)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=3002
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all values of the parameter $b$, for each of which there exists a number $a$ such that the system

$$
\left\{\begin{array}{l}
x^{2}+y^{2}+2 b(b-x+y)=4 \\
y=\frac{9}{(x+a)^{2}+1}
\end{array}\right.
$$

has at least one solution $(x ; y)$.
