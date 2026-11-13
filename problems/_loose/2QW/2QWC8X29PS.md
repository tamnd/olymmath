---
tag: 2QWC8X29PS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=217433
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For a number consists of $0$ and $1$, one can perform the following operation: change all $1$ into $100$, all $0$ into $1$. For all nonnegative integer $n$, let $A_n$ be the number obtained by performing the operation $n$ times on $1$(starts with $100,10011,10011100100,\dots$), and $a_n$ be the $n$-th digit(from the left side) of $A_n$. Prove or disprove that there exists a positive integer $m$ satisfies the following:

For every positive integer $l$, there exists a positive integer $k\le m$ satisfying$$a_{l+k+1}=a_1,\ a_{l+k+2}=a_2,\ \dots,\ a_{l+k+2017}=a_{2017}$$
