---
tag: ZAKKR17Q30
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2025 Taiwan TST Round 3
    url: https://artofproblemsolving.com/community/c6h3556485
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=2952
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tw-tst/2025
    source: hf-ai-mo-aops
    label: 2025 Taiwan TST Round 3
---
Find the number of polynomials $F(x,y)$ satisfying the following:
1. $\deg F \leq 2048$ ;
2. the coefficients of $F(x,y)$ are $0$ and $1$ ;
3. $F(x,0)=F(0,y)\equiv 0$ ;
4. $F(x+z,y)+F(z,y)+F(x,y+z)+F(x,z)$ has all of its coefficients being even.

*Proposed by usjl*
