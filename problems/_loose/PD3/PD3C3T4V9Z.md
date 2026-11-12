---
tag: PD3C3T4V9Z
kind: problem
type: answer
answer: "3.5"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=10103
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all values of the parameter $a$ for which the system

$$
\left\{\begin{array}{l}
y=\frac{x+1}{|x|-1} \\
|x+y+a|+|x-y-a|=1
\end{array}\right.
$$

has a unique solution. In your answer, specify the smallest of all the obtained values of the parameter $a$.
