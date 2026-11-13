---
tag: R8DZ9BC5A0
kind: problem
type: answer
answer: "672"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=264360
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Call a positive integer $n\geq 2$ *junk* if there exist two distinct $n$ digit binary strings $a_1a_2\cdots a_n$ and $b_1b_2\cdots b_n$ such that

- $a_1+a_2=b_1+b_2,$

- $a_{i-1}+a_i+a_{i+1}=b_{i-1}+b_i+b_{i+1}$ for all $2\leq i\leq n-1,$ and

- $a_{n-1}+a_n=b_{n-1}+b_n$.

Find the number of junk positive integers less than or equal to $2016$.

*Proposed by Nathan Ramesh
