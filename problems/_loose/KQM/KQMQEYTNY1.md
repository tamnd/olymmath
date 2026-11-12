---
tag: KQMQEYTNY1
kind: problem
type: answer
answer: "1"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=55154
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Microcalculator MK-97 can perform only three operations on numbers stored in memory:

1) check if two selected numbers are equal,
2) add selected numbers,
3) find the roots of the equation $x^{2}+a x+b=0$ for selected numbers $a$ and $b$, or display a message if there are no roots.

The results of all actions are stored in memory. Initially, the memory contains a single number $x$. How can one use the MK-97 to determine if this number is equal to one?
