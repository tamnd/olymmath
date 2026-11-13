---
tag: MK7F6VWBZX
kind: problem
type: answer
answer: a_{50}+b_{50}>20
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=131268
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the sequences $\left\{a_{n}\right\}$ and $\left\{b_{n}\right\}$ satisfy
$$
\begin{array}{l}
a_{1}>0, b_{1}>0, \\
\left\{\begin{array}{l}
a_{n+1}=a_{n}+\frac{1}{b_{n}}, \\
b_{n+1}=b_{n}+\frac{1}{a_{n}}
\end{array}\left(n \in \mathbf{Z}_{+}\right) .\right. \\
\end{array}
$$

Prove: $a_{50}+b_{50}>20$.
