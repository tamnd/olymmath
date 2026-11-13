---
tag: N2T6BVE8H0
kind: problem
type: answer
answer: 14or45
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=103833
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Question 24 Let $m \geqslant 14$ be an integer, and the function $f: \mathbf{N} \rightarrow \mathbf{N}$ is defined as follows:
$$
f(n)=\left\{\begin{array}{ll}
n-m+14 . & n>m^{2} ; \\
f(f(n+m-13)) & n \leqslant m^{2} .
\end{array}\right.
$$

Find all $m$ such that $f(1995)=1995$.
