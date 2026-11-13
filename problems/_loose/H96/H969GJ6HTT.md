---
tag: H969GJ6HTT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=110457
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a real number $r \in(0,1)$. Prove: If $n$ complex numbers $z_{1}, z_{2}, \cdots, z_{n}$ satisfy
$$
\begin{array}{l}
\left|z_{k}-1\right| \leqslant r(k=1,2, \cdots, n), \\
\text { then } \left|z_{1}+z_{2}+\cdots+z_{n}\right|\left|\frac{1}{z_{1}}+\frac{1}{z_{2}}+\cdots+\frac{1}{z_{n}}\right| \\
\geqslant n^{2}\left(1-r^{2}\right) .
\end{array}
$$
