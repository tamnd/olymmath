---
tag: P0BSWH765W
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=112829
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n \in \mathbf{Z}_{+}$. Does there exist a positive real number $\varepsilon=\varepsilon(n)$ such that for any $x_{1}, x_{2}, \cdots, x_{n}>0$, we have
$$
\begin{array}{l}
\left(\prod_{i=1}^{n} x_{i}\right)^{\frac{1}{n}} \\
\leqslant(1-\varepsilon) \frac{1}{n} \sum_{i=1}^{n} x_{i}+\varepsilon n\left(\sum_{i=1}^{n} \frac{1}{x_{i}}\right)^{-1} ?
\end{array}
$$
