---
tag: FKA2J4CX2Q
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=118684
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n \geqslant 3$ be an integer, and positive integers $a_{1}, a_{2}, \cdots, a_{n}$ satisfy $\left(a_{1}, a_{2}, \cdots, a_{n}\right)=1$. Now place them around a circle. Each time, an operation is allowed as follows: pick any number $a_{j}$, add the greatest common divisor of its two adjacent numbers to it, and then erase the original number (i.e., replace $a_{j}$ with $a_{j}+\left(a_{j-1}, a_{j+1}\right)$, with the convention that $a_{n+1}=a_{1}, a_{0}=a_{n}$). Prove: It is possible to make the numbers on the circle pairwise coprime after a finite number of such operations.
