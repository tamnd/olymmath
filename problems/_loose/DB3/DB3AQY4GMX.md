---
tag: DB3AQY4GMX
kind: problem
type: answer
answer: A^{-1}=(\begin{pmatrix}-2&-3/2&13/2\\1&0&-2\\0&1/2&-1/2\end{pmatrix})
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33266
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Using the method of the adjugate matrix, find $A^{-1}$ if

$$
A=\left(\begin{array}{lll}
2 & 5 & 6 \\
1 & 2 & 5 \\
1 & 2 & 3
\end{array}\right)
$$
