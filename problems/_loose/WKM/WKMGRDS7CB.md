---
tag: WKMGRDS7CB
kind: problem
type: answer
answer: "6"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=94473
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Define a sequence: if $a_{n}=112$, then $a_{n+1}=2$ 112, which means reading the digits of $a_{n}$ from left to right as two 1s and one 2 to form $a_{n+1}=2112$. Following this rule, we get
$$
a_{n+2}=122112, a_{n+3}=11222112 .
$$

Given $a_{1}=13255569$, and following this rule to find $a_{100}$. Then, from $a_{1}$ to $a_{100}$, the number of different digits that appear is ( ) kinds.
(A) 5
(B) 6
(C) 7
(D) 8
