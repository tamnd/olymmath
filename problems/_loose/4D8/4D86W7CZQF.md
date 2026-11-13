---
tag: 4D86W7CZQF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=220110
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Define the sequence $A_1 , A_2 , \cdots $ by $A_1=1$ and for $n=2,3,4, \cdots$,
$$A_{n+1}~=~\dfrac{A_n +2}{A_n +1}$$
Define another sequence $B_1 , B_2 , \cdots $ by $B_1=1$ and for $n=2,3,4, \cdots$,
$$B_{n+1}~=~\dfrac{B_n^2+2}{2B_n}$$

Prove that $B_{n+1}~=~A_{2^n}$ for all non-negative integers $n$ .
