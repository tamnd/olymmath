---
tag: ENNK6A62P0
kind: problem
type: answer
answer: 6(\alpha_{1}^{n-3}+\alpha_{2}^{n-3}+2)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=140574
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find the number of SDRs of the array
$$
\begin{array}{ccccccccccc}
1 & 2 & 3 & 4 & 5 & 6 & \cdots & n-2 & n-1 & n & \\
2 & 3 & 1 & 5 & 6 & 7 & \cdots & n-1 & n & 4 & (n \geqslant 6) \\
3 & 1 & 2 & 6 & 7 & 8 & \cdots & n & 4 & 5 &
\end{array}
$$
