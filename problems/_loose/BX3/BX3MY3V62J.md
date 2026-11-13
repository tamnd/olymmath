---
tag: BX3MY3V62J
kind: problem
type: answer
answer: \text{rank}\ A \leq 2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=205587
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n\in \mathbb{N}^*$ and a matrix $A\in \mathcal{M}_n(\mathbb{C}),\ A=(a_{ij})_{1\le i, j\le n}$ such that:

$$a_{ij}+a_{jk}+a_{ki}=0,\ (\forall)i,j,k\in \{1,2,\ldots,n\}$$

Prove that $\text{rank}\ A\le 2$.
