---
tag: 1AJ1TW74SR
kind: problem
type: answer
answer: 1-\frac{1}{\sqrt[4]{2}}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=187445
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the positive real numbers $x_{1}, x_{2}, x_{3}$, and $x_{4}$ such that

$$
x_{1}+x_{2}+x_{3}+x_{4}=1
$$

Let $s$ be the largest of the numbers

$$
\frac{x_{1}}{1+x_{1}}, \frac{x_{2}}{1+x_{1}+x_{2}}, \frac{x_{3}}{1+x_{1}+x_{2}+x_{3}}, \frac{x_{4}}{1+x_{1}+x_{2}+x_{3}+x_{4}}
$$

What is the smallest value that $s$ can achieve?
