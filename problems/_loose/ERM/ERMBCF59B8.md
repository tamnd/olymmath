---
tag: ERMBCF59B8
kind: problem
type: answer
answer: C^{-1}=\frac{1}{33}\cdot(\begin{pmatrix}-16&9&11\\9&-3&0\\31&-3&-11\end{pmatrix})
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=31458
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a third-order square matrix

$$
C=\left(\begin{array}{rrr}
1 & 2 & 1 \\
3 & -5 & 3 \\
2 & 7 & -1
\end{array}\right)
$$

Determine the existence and find the inverse matrix $C^{-1}$.
