---
tag: P0WWGGR975
kind: problem
type: answer
answer: (\begin{pmatrix}2&11\\4&19\\3&18\end{pmatrix}),(\begin{pmatrix}5&3&1\\3&3&0\end{pmatrix})
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33261
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given matrices

1) $A=\left(\begin{array}{lll}1 & 1 & 2 \\ 3 & 2 & 3 \\ 4 & 3 & 2\end{array}\right), B=\left(\begin{array}{cc}1 & 1 \\ -1 & 2 \\ 1 & 4\end{array}\right)$;
2) $A=\left(\begin{array}{lll}1 & 1 & 3 \\ 1 & 0 & 2\end{array}\right), B=\left(\begin{array}{ccc}1 & 3 & 2 \\ 1 & 0 & 2 \\ 1 & 0 & -1\end{array}\right)$.

Find $A \cdot B$.
