---
tag: GWEMJ21CGX
kind: problem
type: answer
answer: (\begin{pmatrix}2n\\n\end{pmatrix})
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90645
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n \geq 1$ be an integer. How many ways can the rectangle having vertices $(0,0),(n, 0),(n, 1),(0,1)$ be dissected into $2 n$ triangles, all vertices of which have integer coordinates?

Remark. The triangles are considered as positioned on the coordinate plane; in particular, tilings related by rotation and reflection are considered distinct.
