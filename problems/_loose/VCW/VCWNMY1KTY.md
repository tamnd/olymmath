---
tag: VCWNMY1KTY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=128187
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $G$ be the centroid of the tetrahedron $A_{1} A_{2} A_{3} A_{4}$, then
$$
\begin{array}{l}
4 G A_{1}^{2}+A_{2} A_{3}^{2}+A_{2} A_{4}^{2}+A_{3} A_{4}^{2}=4 G A_{2}^{2}+A_{1} A_{3}^{2}+A_{1} A_{4}^{2}+A_{3} A_{4}^{2} \\
=4 G A_{3}^{2}+A_{1} A_{2}^{2}+A_{1} A_{4}^{2}+A_{2} A_{4}^{2}=4 G A_{4}^{2}+A_{1} A_{2}^{2}+A_{1} A_{3}^{2}+A_{2} A_{3}^{2}=\frac{3}{4} \sum_{1 \leqslant k<j \leqslant 4} A_{k} A_{j}^{2} .
\end{array}
$$
