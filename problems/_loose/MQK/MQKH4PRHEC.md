---
tag: MQKH4PRHEC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2022 CMIMC
    url: https://artofproblemsolving.com/community/c6h2791496
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=173
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cmimc/2022
    source: hf-ai-mo-aops
    label: 2022 CMIMC
---
Barry has a standard die containing the numbers 1-6 on its faces.

He rolls the die continuously, keeping track of the sum of the numbers he has rolled so far, starting from 0. Let $E_n$ be the expected number of time he needs to until his recorded sum is at least $n$ .

It turns out that there exist positive reals $a, b$ such that $$ \lim_{n \rightarrow \infty} E_n - (an + b) = 0 $$ Find $(a,b)$ .

*Proposed by Dilhan Salgado*
