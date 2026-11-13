---
tag: RDPZB5K4GF
kind: problem
type: answer
answer: 1,0
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=134056
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the sequence $\left\{a_{n}\right\}$ satisfies:
$$
\begin{array}{l}
a_{1}=a_{2}=1, \\
a_{n+1}=\frac{n^{2} a_{n}^{2}+5}{\left(n^{2}-1\right) a_{n-1}}(n>1) .
\end{array}
$$

Question: Does there exist real numbers $x, y (x \neq 0)$, such that $\left\{\frac{b_{n+2}+b_{n}}{b_{n+1}}\right\}$ (where, $b_{n}=(n x+y) a_{n}, n \in \mathbf{Z}_{+}$) is a constant sequence?
