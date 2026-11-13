---
tag: FDR22WM24F
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=121974
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let real numbers $a_{1}, a_{2}, \cdots, a_{n}$ and $b_{1}, b_{2}, \cdots, b_{n}$ be not proportional, and real numbers $x_{1}, x_{2}, \cdots, x_{n}$ satisfy:
$$
\begin{array}{l}
a_{1} x_{1}+a_{2} x_{2}+\cdots+a_{n} x_{n}=0, \\
b_{1} x_{1}+b_{2} x_{2}+\cdots+b_{n} x_{n}=1 .
\end{array}
$$

Prove: $x_{1}^{2}+x_{2}^{2}+\cdots+x_{n}^{2}$
$$
\geqslant \frac{\sum_{i=1}^{n} a_{i}^{2}}{\sum_{i=1}^{n} a_{i}^{2} \cdot \sum_{i=1}^{n} b_{i}^{2}-\left(\sum_{i=1}^{n} a_{i} b_{i}\right)^{2}} .
$$
