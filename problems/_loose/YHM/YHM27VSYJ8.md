---
tag: YHM27VSYJ8
kind: problem
type: answer
answer: 2^{\lfloor n/2 \rfloor}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Iran/train/0000.parquet#row=349
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo
    source: hf-mathnet
    label: Iran 41th Iranian Mathematical Olympiad
---
Let $n$ be a given positive integer. Find the number of permutations $(a_1, \dots, a_n)$ of $1, 2, \dots, n$ such that for all $1 \le i \le n$ we have $a_i \mid 2i$.
