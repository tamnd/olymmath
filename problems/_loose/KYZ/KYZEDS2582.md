---
tag: KYZEDS2582
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=125322
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $[x]$ denote the greatest integer not exceeding the real number $x$, and $\{x\}=x-[x]$. Suppose $2n$ distinct odd primes $p_{1}, p_{2}, \cdots, p_{2 n}$ satisfy
$$
4\left(\sum_{k=1}^{1006}(-1)^{\left[\frac{2016 k}{1000}\right]}\left\{\frac{2016 k}{1007}\right\}\right)+\frac{2}{1007}
$$

is a non-quadratic residue modulo $p_{i}(i=1,2, \cdots, 2 n)$, and $\sum_{i=1}^{2 n} p_{i} \equiv 0(\bmod 4)$, where $(2, n)=1$. Prove:
$$
4 \mid \boldsymbol{\sigma}\left(p_{1} p_{2} \cdots p_{2 n}\right) \text {. }
$$
