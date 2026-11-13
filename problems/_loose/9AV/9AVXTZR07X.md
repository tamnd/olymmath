---
tag: 9AVXTZR07X
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=80857
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
a) Let $\mathrm{N}$ be a natural number and $\mathrm{p}$ a prime. Then we have

$$
v_{p}(\mathrm{~N}!)=\sum_{i=1}^{\infty}\left\lfloor\frac{N}{p^{i}}\right\rfloor
$$

b) We denote by $\binom{N}{k}$ the number of ways to choose $k$ elements from $N$. If $N=p^{n}$ and $N \geqslant k$ we have

$$
v_{p}\left(\binom{N}{k}\right)=v_{p}(N)-v_{p}(k)
$$
