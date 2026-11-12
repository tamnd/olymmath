---
tag: FGJTMHKEVD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2013 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h527633
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=9281
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/2013
    source: hf-ai-mo-aops
    label: 2013 China Team Selection Test
---
Let $n\ge 2$ be an integer. $a_1,a_2,\dotsc,a_n$ are arbitrarily chosen positive integers with $(a_1,a_2,\dotsc,a_n)=1$ . Let $A=a_1+a_2+\dotsb+a_n$ and $(A,a_i)=d_i$ . Let $(a_2,a_3,\dotsc,a_n)=D_1, (a_1,a_3,\dotsc,a_n)=D_2,\dotsc, (a_1,a_2,\dotsc,a_{n-1})=D_n$ .
Find the minimum of $\prod\limits_{i=1}^n\dfrac{A-a_i}{d_iD_i}$
