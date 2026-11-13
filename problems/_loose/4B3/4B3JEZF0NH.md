---
tag: 4B3JEZF0NH
kind: problem
type: answer
answer: "8078"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=142278
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the sequence $\left\{a_{n}\right\}$ satisfies:
$$
\begin{array}{l}
a_{1}=1, a_{2}=\frac{3}{7}, \\
a_{n}=\frac{a_{n-2} a_{n-1}}{2 a_{n-2}-a_{n-1}}\left(n \in \mathbf{Z}_{+}, n \geqslant 3\right) .
\end{array}
$$

If $a_{2019}=\frac{p}{q}\left(p 、 q \in \mathbf{Z}_{+},(p, q)=1\right)$, then $p+q=( )$.
(A) 2020
(B) 4039
(C) 6057
(D) 6061
(E) 8078
