---
tag: MPK82AAMC4
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=101381
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Question 1 Let $n$ be a positive integer, $p$ a prime, satisfying $p^{m} \mid n$, and $p^{m+1} \nmid n$. Denote $\operatorname{ord}_{p} n$ as the exponent of the prime $p$ in the factorization of $n$. Define $\operatorname{ord}_{p} n=m$, and let $S_{p}(n)$ be the sum of the digits of $n$ in its $p$-ary representation. Prove:
(1) $\operatorname{ord}_{p} n!=\frac{n-S_{p}(n)}{p-1}$;
(2) $\frac{(2 n)!}{(n!)((n+1)!)}$ is an integer;
(3) If $(m, n+1)=1$, then $\frac{(m n+n)!}{((m n)!)((n+1)!)}$ is an integer.
