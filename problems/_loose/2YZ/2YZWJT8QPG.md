---
tag: 2YZWJT8QPG
kind: problem
type: answer
answer: 50,51,52,53,54
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=194429
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The sequences $t_{1}, t_{2}, t_{3}, \ldots$ and $s_{1}, s_{2}, s_{3}, \ldots$ are defined by

- $t_{1}=1$,
- $t_{2}=m$ for some positive integer $m>0$,
- $s_{k}=t_{1}+t_{2}+t_{3}+\cdots+t_{k-1}+t_{k}$ for each $k \geq 1$, and
- $t_{n}=n s_{n-1}$ for each $n \geq 3$.

There exist positive integers $m$ that end in in exactly four $9 \mathrm{~s}$ and for which $t_{30}=N$ ! for some positive integer $N$. Determine all of these corresponding values of $N$.

(If $n$ is a positive integer, the symbol $n$ ! (read " $n$ factorial") is used to represent the product of the integers from 1 to $n$. That is, $n!=n(n-1)(n-2) \cdots(3)(2)(1)$. For example, $5!=5(4)(3)(2)(1)$ or $5!=120$.)
