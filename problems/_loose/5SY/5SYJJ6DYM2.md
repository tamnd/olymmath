---
tag: 5SYJJ6DYM2
kind: problem
type: answer
answer: "24"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=216293
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $p$ be a prime. It is given that there exists a unique nonconstant function $\chi:\{1,2,\ldots, p-1\}\to\{-1,1\}$ such that $\chi(1) = 1$ and $\chi(mn) = \chi(m)\chi(n)$ for all $m, n \not\equiv 0 \pmod p$ (here the product $mn$ is taken mod $p$). For how many positive primes $p$ less than $100$ is it true that $$\sum_{a=1}^{p-1}a^{\chi(a)}\equiv 0\pmod p?$$ Here as usual $a^{-1}$ denotes multiplicative inverse.

*Proposed by David Altizio*
