---
tag: VRWP5GT570
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=138650
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $x_{1}, x_{2}$ be two natural numbers less than 1000, and let
$$
\begin{array}{l}
x_{3}=\left|x_{1}-x_{2}\right|, x_{4}=\min \left\{\left|x_{1}-x_{2}\right|,\left|x_{1}-x_{3}\right|,\left|x_{2}-x_{3}\right| \mid \cdots, \right. \\
x_{k}=\min \left\{\left|x_{i}-x_{j}\right| \mid 1 \leqslant i, j \leqslant k-1, i \neq j\right\}, \cdots \text { Prove: } x_{21}=0 .
\end{array}
$$
