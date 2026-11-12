---
tag: QABXRZCG0W
kind: problem
type: answer
answer: y_{1}=e^{2x},y_{2}=e^{-x}+e^{2x},y_{3}=-e^{-x}+e^{2x}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=31348
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Solve the system

$$
\left\{\begin{array}{l}
y_{1}^{\prime}=y_{2}+y_{3} \\
y_{2}^{\prime}=y_{1}+y_{3} \\
y_{3}^{\prime}=y_{1}+y_{2}
\end{array}\right.
$$

Find the particular solution if $x=0, y_{1}=1, y_{2}=2, y_{3}=0$.
