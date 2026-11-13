---
tag: EMT31TH5MB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=215910
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider a sequence $(a_k)_{k \ge 1}$ of natural numbers defined as follows: $a_1=a$ and $a_2=b$ with $a,b>1$ and $\gcd(a,b)=1$ and for all $k>0$, $a_{k+2}=a_{k+1}+a_k$. Prove that for all natural numbers $n$ and $k$, $\gcd(a_n,a_{n+k}) <\frac{a_k}{2}$.
