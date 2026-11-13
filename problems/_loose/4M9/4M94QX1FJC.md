---
tag: 4M94QX1FJC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=164531
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n>0$ be an integer, $f_{0}, \ldots, f_{2 n}$ be given real numbers, and denote by $x_{i}$ the angle $2 \pi i /(2 n+1)$ $(i=0,1, \ldots, 2 n)$. Furthermore, let

$$
\begin{aligned}
\alpha_{i} & =\frac{2}{2 n+1} \sum_{j=0}^{2 n} f_{j} \cdot \cos \left(j \cdot x_{i}\right) \\
(i=0,1, \ldots, n) & \\
\beta_{i} & =\frac{2}{2 n+1} \sum_{j=0}^{2 n} f_{j} \cdot \sin \left(j \cdot x_{i}\right)
\end{aligned}
$$

Prove that for every $0 \leq i \leq 2 n$,

$$
f_{i}=\frac{\alpha_{0}}{2}+\sum_{j=1}^{n}\left(\alpha_{j} \cos \left(j \cdot x_{i}\right)+\beta_{j} \cdot \sin \left(j \cdot x_{i}\right)\right)
$$
