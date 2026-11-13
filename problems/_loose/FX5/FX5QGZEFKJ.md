---
tag: FX5QGZEFKJ
kind: problem
type: answer
answer: 0,\frac{1}{31},\frac{2}{31},\ldots,\frac{30}{31},1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90517
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Define a function $f$ on the real numbers by

$$
f(x)= \begin{cases}2 x & \text { if } x<1 / 2 \\ 2 x-1 & \text { if } x \geq 1 / 2\end{cases}
$$

Determine all values $x$ satisfying $f(f(f(f(f)))))=x$.
