---
tag: RF4NF3BEQF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2019 CMIMC
    url: https://artofproblemsolving.com/community/c6h1774495
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=17515
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cmimc/2019
    source: hf-ai-mo-aops
    label: 2019 CMIMC
---
Let $a_0=29$ , $b_0=1$ and $$ a_{n+1} = a_n+a_{n-1}\cdot b_n^{2019}, b_{n+1}=b_nb_{n-1} $$ for $n\geq 1$ . Determine the smallest positive integer $k$ for which $29$ divides $\gcd(a_k, b_k-1)$ whenever $a_1,b_1$ are positive integers and $29$ does not divide $b_1$ .
