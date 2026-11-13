---
tag: JHRC5EFR5N
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=108167
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $ m, n \in \mathbf{Z}_{+}, m \geqslant n, S $ be the set of all ordered $ n $-tuples $\left(a_{1}, a_{2}, \cdots, a_{n}\right)$ of positive integers $a_{1}, a_{2}, \cdots, a_{n}$ that satisfy $a_{1}+a_{2}+\cdots+a_{n}=m$. Prove:
$$
\begin{array}{l}
\sum_{S} 1^{a_{1}} \times 2^{a_{2}} \times \cdots \times n^{a_{n}} \\
=\sum_{j=1}^{n}(-1)^{n-j} \mathrm{C}_{n}^{j} j^{m} .{ }^{[1]}
\end{array}
$$
(2010, USA National Team Selection Exam)
