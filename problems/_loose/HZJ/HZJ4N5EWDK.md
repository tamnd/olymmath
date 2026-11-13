---
tag: HZJ4N5EWDK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=82101
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a_{ij}, 1 \leq i, j \leq 3$ be real numbers such that the $a_{ij}$ are strictly positive for $i=j$ but strictly negative for $i \neq j$.

Prove that there exist strictly positive real numbers $c_{1}, c_{2}, c_{3}$ such that the numbers

$$
\begin{aligned}
& a_{11} c_{1}+a_{12} c_{2}+a_{13} c_{3} \\
& a_{21} c_{1}+a_{22} c_{2}+a_{23} c_{3} \\
& a_{31} c_{1}+a_{32} c_{2}+a_{33} c_{3}
\end{aligned}
$$

are either all strictly negative, or all strictly positive, or all zero.
