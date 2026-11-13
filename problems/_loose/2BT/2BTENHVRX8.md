---
tag: 2BTENHVRX8
kind: problem
type: answer
answer: T_{}=\frac{3^{-1}+1}{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=95869
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Question 3 Let the sequence $\left\{a_{n}\right\}$ satisfy
$$
a_{1}=\frac{b(b+1)}{2}+c \text {, }
$$

where $b \in \mathbf{N}_{+}, c \in \mathbf{N}$ and $0 \leqslant c \leqslant b-1$,
$$
a_{n+1}=\left\{\begin{array}{ll}
a_{n}+n, & a_{n} \leqslant n ; \\
a_{n}-n, & a_{n}>n
\end{array}(n=1,2, \cdots) .\right.
$$

Then the first fixed term is $T_{1}=b+2 c$, and its general formula is
$$
T_{m}=\frac{(2 b+4 c-1) 3^{m-1}+1}{2}\left(m \in \mathbf{N}_{+}\right)
$$
