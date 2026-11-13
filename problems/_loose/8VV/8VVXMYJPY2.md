---
tag: 8VVXMYJPY2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90519
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $k$ be a positive integer. Prove that there exist POSITIVE integers $a_{0}, \ldots, a_{k}$ such that for all integers $x \geq 0$,

$$
x^{k}=a_{0}\left(\begin{array}{l}
x \\
k
\end{array}\right)+a_{1}\left(\begin{array}{c}
x+1 \\
k
\end{array}\right)+\cdots+a_{k-1}\left(\begin{array}{c}
x+k-1 \\
k
\end{array}\right) \text {. }
$$

Remark. We use the convention that $\left(\begin{array}{l}n \\ k\end{array}\right)=0$ whenever $k>n \geq 0$.
