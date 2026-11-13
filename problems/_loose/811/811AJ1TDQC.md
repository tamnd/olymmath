---
tag: 811AJ1TDQC
kind: problem
type: answer
answer: "180"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=117076
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given non-zero complex numbers $x, y$ satisfy
$$
\begin{array}{l}
y^{2}\left(x^{2}-x y+y^{2}\right)+x^{3}(x-y)=0 . \\
\text { Find } \sum_{m=0}^{29} \sum_{n=0}^{29} x^{18 m n} y^{-18 m n} \text { . }
\end{array}
$$
