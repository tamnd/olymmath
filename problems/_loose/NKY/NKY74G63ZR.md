---
tag: NKY74G63ZR
kind: problem
type: answer
answer: "2019"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=131810
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For $a \in[1,2019]$, define the sequence $\left\{x_{n}\right\}$ $(n \geqslant 0): x_{0}=a$, for each non-negative integer $n$,
$$
x_{n+1}=\left\{\begin{array}{ll}
1+1009 x_{n}, & x_{n} \leqslant 2 ; \\
2021-x_{n}, & 21011 .
\end{array}\right.
$$

If there exists a positive integer $k$, such that $x_{k}=a$, then the smallest positive integer among such positive integers $k$ is called the smallest positive period of the sequence $\left\{x_{n}\right\}$ $(n \geqslant 0)$. Find all possible smallest positive periods of the sequence $\left\{x_{n}\right\}(n \geqslant 0)$, and find the value of $a$ when the smallest positive period is the smallest odd number greater than 1.
