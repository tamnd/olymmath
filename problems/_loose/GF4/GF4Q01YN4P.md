---
tag: GF4Q01YN4P
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=129615
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A sequence of $n$ real numbers $x_{1}, x_{2}, \cdots, x_{n}$ satisfies
$$
\begin{array}{c}
x_{1}=0, \\
\left|x_{i}\right|=\left|x_{i-1}+c\right|, 2 \leqslant i \leqslant n
\end{array}
$$

where $c$ is a positive real number. Prove that:
$$
\frac{1}{n} \sum_{i=1}^{n} x_{i} \geqslant-\frac{c}{2} \text {. }
$$
