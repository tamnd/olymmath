---
tag: NCF298T0PD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=180461
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider an $n \times n$ array of numbers:

$$
\left(\begin{array}{ccccc}
a_{11} & a_{12} & a_{13} & \cdots & a_{1 n} \\
a_{21} & a_{22} & a_{23} & \cdots & a_{2 n} \\
\vdots & & & & \vdots \\
a_{n 1} & a_{n 2} & a_{n 3} & \cdots & a_{n n}
\end{array}\right)
$$

Suppose each row consists of the $n$ numbers $1,2,3, \ldots, n$ in some order and $a_{i j}=a_{j i}$ for $i=1,2, \ldots, n$ and $j=1,2, \ldots, n$. If $n$ is odd, prove that the numbers $a_{11}, a_{22}, a_{33}, \ldots, a_{n n}$ are $1,2,3, \ldots, n$ in some order.
