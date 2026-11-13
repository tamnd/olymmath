---
tag: YZK2JXJSZW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240893
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For a positive integer $n$, denote $rad(n)$ as product of prime divisors of $n$. And also $rad(1)=1$. Define the sequence $\{a_i\}_{i=1}^{\infty}$ in this way: $a_1 \in \mathbb N$ and for every $n \in \mathbb N$, $a_{n+1}=a_n+rad(a_n)$.
Prove that for every $N \in \mathbb N$, there exist $N$ consecutive terms of this sequence which are in an arithmetic progression.
