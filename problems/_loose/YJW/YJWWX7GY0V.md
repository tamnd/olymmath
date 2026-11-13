---
tag: YJWWX7GY0V
kind: problem
type: answer
answer: D_n \mid 6
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=246230
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For any positive integers $a,b,c,n$, we define
$$D_n(a,b,c)=\mathrm{gcd}(a+b+c,a^2+b^2+c^2,a^n+b^n+c^n).$$

1. Prove that if $n$ is a positive integer not divisible by $3$, then for any positive integer $k$, there exist three integers $a,b,c$ such that $\mathrm{gcd}(a,b,c)=1$, and $D_n(a,b,c)>k$.

2. For any positive integer $n$ divisible by $3$, find all values of $D_n(a,b,c)$, where $a,b,c$ are three positive integers such that $\mathrm{gcd}(a,b,c)=1$.
