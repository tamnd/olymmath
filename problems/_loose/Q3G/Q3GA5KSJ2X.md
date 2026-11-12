---
tag: Q3GA5KSJ2X
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=39214
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $s(n)$ be the sum of those divisors $d$ of the number $n$ for which $n / d$ is odd $(s(n)=0$ for $n \leqslant 0)$.

a) Let $f=\prod_{n=1}^{\infty} \frac{1-x^{n}}{1+x^{n}}$ and $g=\sum_{n=1}^{\infty} s(n) x^{n-1}$. Prove that $D(f)=-2 f g$.

b) Prove that $s(n)-2 s(n-1)+2 s\left(n-2^{2}\right)-2 s\left(n-3^{2}\right)+\ldots=(-1)^{n+1} n$, if $n$ is a perfect square; otherwise this alternating sum is zero.
