---
tag: AFE6FAAYSE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00002-of-00003.parquet#row=144854
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find the number of pairs of integers $(x, y)$ that satisfy the system of inequalities

$$
\left\{\begin{array}{l}
y \geqslant 3^{x}+4 \cdot 3^{81} \\
y<85+\left(3^{81}-1\right) x
\end{array}\right.
$$
