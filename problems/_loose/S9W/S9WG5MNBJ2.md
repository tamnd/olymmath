---
tag: S9WG5MNBJ2
kind: problem
type: answer
answer: \frac{n^2 - n + 0.5}{4}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=235005
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Nonnegative reals $x_1$, $x_2$, $\dots$, $x_n$ satisfies $x_1+x_2+\dots+x_n=n$. Let $||x||$ be the distance from $x$ to the nearest integer of $x$ (e.g. $||3.8||=0.2$, $||4.3||=0.3$). Let $y_i = x_i ||x_i||$. Find the maximum value of $\sum_{i=1}^n y_i^2$.
