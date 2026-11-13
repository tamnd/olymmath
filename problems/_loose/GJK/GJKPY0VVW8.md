---
tag: GJKPY0VVW8
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=213984
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
$a_1=-5$, $a_2=-6$ and for all $n \geq 2$ the ${(a_n)^\infty}_{n=1}$ sequence defined as,
$$a_{n+1}=a_n+(a_1+1)(2a_2+1)(3a_3+1)\cdots((n-1)a_{n-1}+1)((n^2+n)a_n+2n+1)).$$
If a prime $p$ divides $na_n+1$ for a natural number n, prove that there is a integer $m$ such that $m^2\equiv5(modp)$
