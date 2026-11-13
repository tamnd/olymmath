---
tag: KB92CYJB3E
kind: problem
type: answer
answer: F_{n+p+1}=F_{n}F_{p}+F_{n-1}F_{p-1}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=83140
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We have a domino of width 1 and length $n$. We denote $A_{n}$ as the number of possible colorings of this domino, that is, the number of different ways to blacken or not blacken the cells. We denote $F_{n}$ as the number of ways to color this domino such that there are never two adjacent blackened cells.

1. Calculate $A_{n}$.
2. Calculate $F_{1}, F_{2}, F_{3}$ and $F_{4}$.
3. Find a recurrence relation between the $F_{n}$.
4. Show that $\forall n \in \mathbb{N}^{*}, \forall p \in \mathbb{N}^{*}, F_{n+p+1}=F_{n} F_{p}+F_{n-1} F_{p-1}$.
