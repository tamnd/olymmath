---
tag: 73DBBXVHSW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=239336
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\dbinom{n}{k}$ denote the binomial coefficient $\frac{n!}{k!(n-k)!}$ , and $F_m$ be the $m^{th}$ Fibonacci number given by $F_1=F_2=1$ and $F_{m+2}=F_m+F_{m+1}$ for all $m\geq 1$. Show that

$\sum \dbinom{n}{k}=F_{m+1}$ for all $m\geq 1$ .
Here the above sum is over all pairs of integers $n\geq k\geq 0$ with $n+k=m$ .
