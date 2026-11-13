---
tag: QGZH737Y2G
kind: problem
type: answer
answer: \sqrt{A+B}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=154812
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $A$ and $B$ be two fixed positive real numbers. The function $f$ is defined by
$$
f(x, y)=\min \left\{x, \frac{A}{y}, y+\frac{B}{x}\right\},
$$
for all pairs $(x, y)$ of positive real numbers.
Determine the largest possible value of $f(x, y)$.
