---
tag: 5G2STKCRTW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=226128
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be an integer greater than 2. A positive integer is said to be *attainable *if it is 1 or can be obtained from 1 by a sequence of operations with the following properties:

1.) The first operation is either addition or multiplication.

2.) Thereafter, additions and multiplications are used alternately.

3.) In each addition, one can choose independently whether to add 2 or $n$

4.) In each multiplication, one can choose independently whether to multiply by 2 or by $n$.

A positive integer which cannot be so obtained is said to be *unattainable*.

**a.)** Prove that if $n\geq 9$, there are infinitely many unattainable positive integers.

**b.)** Prove that if $n=3$, all positive integers except 7 are attainable.
