---
tag: TPFMYW0GJN
kind: problem
type: answer
answer: P(x)=-2x^{2}+4x
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=115622
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $P(x)$ be a polynomial of degree $2n$ such that
$$
\begin{array}{l}
P(0)=P(2)=\cdots=P(2 n)=0, \\
P(1)=P(3)=\cdots=P(2 n-1)=2, \\
P(2 n+1)=-6 .
\end{array}
$$

Determine $n$ and $P(x)$.
(Adapted from the 13th United States of America Mathematical Olympiad)
[Analysis] Notice that, in the given conditions, several consecutive values of the polynomial are involved, which can be associated with differences.
Thus, by Newton's formula (2), let $x=0$, we have
$$
\Delta^{k} f(0)=\sum_{i=0}^{k}(-1)^{k-i} \mathrm{C}_{k}^{i} f(i)=0 .
$$

This gives the values of $P(0), P(1), \cdots, P(2 n+1)$ and $\Delta^{2 n+1} P(0)$.
