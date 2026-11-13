---
tag: SPFNEJ4ABE
kind: problem
type: answer
answer: 2,3,4,5,6,8,9,10,12,13,16,17,21,25
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=180266
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $M$ be the set of odd natural numbers. For any non-zero natural number $n$, we denote by $A(n)$ the number of subsets of $M$ whose elements sum to $n$. (For example, $A(9)=2$ because the only subsets of $M$ whose elements sum to 9 are $\{9\}$ and $\{1,3,5\}$).

a) Show that $A(n) \leq A(n+1)$ for any natural number $n, n \geq 2$;

b) Determine the natural numbers $n, n \geq 2$ for which $A(n)=A(n+1)$.
