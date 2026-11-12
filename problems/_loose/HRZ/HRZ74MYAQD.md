---
tag: HRZ74MYAQD
kind: problem
type: answer
answer: "4"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=24646
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine the remainder of the division by 7 of the number

$$
3^{100}
$$

The 10-arithmetic and 7-arithmetic we have discussed are special cases of residue arithmetic modulo $m$, or $m$-arithmetic. Let $m$ be any positive integer. The elements of $m$-arithmetic are the numbers $0,1,2, \ldots, m-1$. Addition and multiplication in $m$-arithmetic are defined as follows: to add (or multiply) two numbers, one must take the remainder of the division by $m$ of their ordinary sum (respectively product).
