---
tag: GTM30G8XJQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=107874
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
C4 For a positive integer $n$, let $\tau(n)$ be the sum of its divisors (including 1 and itself), and let $\phi(n)$ be the number of integers $x, 1 \leq x \leq n$, such that $x$ and $n$ are relatively prime. For example, if $n=18$, then $\tau(18)=1+2+3+6+9+18=39$ and $\phi(18)=6$ since the numbers $1,5,7,11,13$, and 17 are relatively prime to 18 .
(a) Prove that $\phi(n) \tau(n)1$.
(b) Determine all positive integers $n$ such that $\phi(n) \tau(n)+1=n^{2}$.
(c) Prove that there are no positive integers $n$ such that $\phi(n) \tau(n)+2023=n^{2}$.
