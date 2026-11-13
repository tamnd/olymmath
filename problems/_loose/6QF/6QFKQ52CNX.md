---
tag: 6QFKQ52CNX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=220227
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
It is known that subsets $A_1,A_2, \cdots , A_n$ of set $I=\{1,2,\cdots ,101\}$ satisfy the following condition
$$\text{For any } i,j \text{ } (1 \leq i < j \leq n) \text{, there exists } a,b \in A_i \cap A_j \text{ so that } (a,b)=1$$
Determine the maximum positive integer $n$.

*$(a,b)$ means $\gcd (a,b)$
