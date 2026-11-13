---
tag: VJK4EE2EFJ
kind: problem
type: answer
answer: k(b-
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=144742
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $26 f$ be a mapping from the set of natural numbers $\mathbf{N}$ to $\mathbf{N}$. Denote $f^{[2]}=$ $f(f(n)), \cdots, f^{[m]}(n)=f^{[m-1]}[f(n)]$. Suppose $a, b, c$ are known natural numbers and
$$
f(n)=\left\{\begin{array}{ll}
f(n+a) & \text { if } n > c ; \\
f(f(n+b) & \text { if } n \leqslant c .
\end{array}\right.
$$
(2) Find a necessary and sufficient condition for $f$ to have at least one fixed point;
(3) Express such a fixed point in terms of $a, b, c$.
(1990 Chinese National Training Team)
