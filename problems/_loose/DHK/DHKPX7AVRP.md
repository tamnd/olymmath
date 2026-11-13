---
tag: DHKPX7AVRP
kind: problem
type: answer
answer: 14,3,11,20,100,999999
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=132877
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For a positive integer $n$, we define function $P(n)$ to be the sum of the digits of $n$ plus the number of digits of $n$. For example, $P(45)=4+5+2=11$. (Note that the first digit of $n$ reading from left to right, cannot be 0 ).
(a) Determine $P(2017)$.
(b) Determine all numbers $n$ such that $P(n)=4$.
(c) Determine with an explanation whether there exists a number $n$ for which $P(n)-P(n+1)>$ 50 .
