---
tag: BKQ62TZVPX
kind: problem
type: answer
answer: \mathrm{e}^{2^{2018}-2019}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=111518
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the sequence $\left\{a_{n}\right\}$ satisfies
$$
\begin{array}{l}
a_{1}=\mathrm{e}, a_{2}=\mathrm{e}^{3}, \\
\mathrm{e}^{1-k} a_{n}^{k+2}=a_{n+1} a_{n-1}^{2 k}\left(n \geqslant 2, n \in \mathbf{Z}_{+}, k \in \mathbf{R}_{+}\right) . \\
\text {Find } \prod_{i=1}^{2017} a_{i} . \text { (Hao Hongbin) }
\end{array}
$$
(Hao Hongbin)
