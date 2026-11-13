---
tag: GFN64ZN97P
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=102817
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For any real number sequence $T=\left\{x_{1}, x_{2}, \cdots, x_{n}\right\}$, let
$$
\begin{array}{l}
T_{1}=\left\{\left(x_{i}, x_{j}\right)|| x_{i}-x_{j} \mid \leqslant 1,1 \leqslant i 、 j \leqslant n\right\}, \\
T_{2}=\left\{\left(x_{i}, x_{j}\right)|| x_{i}-x_{j} \mid \leqslant 2,1 \leqslant i 、 j \leqslant n\right\} .
\end{array}
$$

Prove: $\left|T_{2}\right|<3\left|T_{1}\right|$.
