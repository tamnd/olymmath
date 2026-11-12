---
tag: 7SMP959WVY
kind: problem
type: answer
answer: (2016,1),(2020,5),(2028,13),(2046,31),(2080,65),(2170,155),(2418,403),(4030,2015)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=16607
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all pairs of natural numbers $m$ and $n$ that satisfy the system of equations

$$
\left\{\begin{array}{l}
\operatorname{LCM}(m, n)+\operatorname{GCD}(m, n)=m+n \\
m-n=2015
\end{array}\right.
$$
