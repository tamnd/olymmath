---
tag: 4ZESPACP8F
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=98608
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
1・85 Let $a, b, n$ be natural numbers, and $a>1, b>1, n>1$. Also, $A_{n-1}$ and $A_{n}$ are $a$-ary numbers, $B_{n-1}$ and $B_{n}$ are $b$-ary numbers, and $A_{n-1}, A_{n}, B_{n-1}$, and $B_{n}$ can be represented as follows:
$$
\begin{aligned}
A_{n-1} & =\overline{x_{n-1} x_{n-2} \cdots x_{0}}, A_{n}=\overline{x_{n} x_{n-1} \cdots x_{0}}, \\
B_{n-1} & =\overline{x_{n-1} x_{n-2} \cdots x_{0}}, B_{n}=\overline{x_{n} x_{n-1} \cdots x_{0}} .
\end{aligned}
$$
( $a$-ary representation)
( $b$-ary representation)
Moreover, $x_{n} \neq 0, x_{n-1} \neq 0$. Prove:
When $a>b$, $\frac{A_{n-1}}{A_{n}}<\frac{B_{n-1}}{B_{n}}$.
