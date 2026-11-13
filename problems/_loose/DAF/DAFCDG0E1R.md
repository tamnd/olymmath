---
tag: DAFCDG0E1R
kind: problem
type: answer
answer: F_{299376000k} \equiv 0 \pmod{10^8} \text{ for } k \in \mathbb{N}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=220543
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\{F_n\}_{n\ge1}$ be the Fibonacci sequence defined by $F_1=F_2=1$ and for all $n\ge3$, $F_n=F_{n-1}+F_{n-2}$. Prove that among the first $10000000000000002$ terms of the sequence there is one term that ends up with $8$ zeroes.

*Proposed by José Luis Díaz-Barrero*
