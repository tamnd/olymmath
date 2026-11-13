---
tag: MYFGF72V15
kind: problem
type: answer
answer: P(x) = R x^r
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=205156
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For each positive integer $n>1$, if $n=p_1^{\alpha_1}p_2^{\alpha_2}\cdots p_k^{\alpha_k}$($p_i$ are pairwise different prime numbers and $\alpha_i$ are positive integers), define $f(n)$ as $\alpha_1+\alpha_2+\cdots+\alpha_k$. For $n=1$, let $f(1)=0$. Find all pairs of integer polynomials $P(x)$ and $Q(x)$ such that for any positive integer $m$, $f(P(m))=Q(f(m))$ holds.
