---
tag: MH4C9MXRW0
kind: problem
type: answer
answer: "-4034"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=129376
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given $S_{n}$ as the sum of the first $n$ terms of the sequence $\left\{a_{n}\right\}$, with the rule $S_{0}=0$. If for any $n \in \mathbf{Z}_{+}$, we have
$$
\begin{array}{l}
\frac{a_{n}}{2017}=-\frac{2017+S_{n-1}}{n}, \\
\text { then } \sum_{n=1}^{2017} 2^{n} a_{n}=
\end{array}
$$
