---
tag: 3BBW3TBARC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2025 ELMO  Shortlist
    url: https://artofproblemsolving.com/community/c6h3600598
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=69378
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: elmo-sl/2025
    source: hf-ai-mo-aops
    label: 2025 ELMO  Shortlist
---
Let $A_1A_2\dots A_{2n}$ be a cyclic polygon, and let $k\le n$ be a positive integer. Suppose that for all $1\le i\le 2n$ , $\angle A_i A_{i-1}A_{i+k}\le \pi/2$ . Prove that
$$\min(\angle A_1 A_{2n}A_{n+1},\angle A_1A_2A_{n+1})+\cdots+\min(\angle A_n A_{n-1}A_{2n},\angle A_nA_{n+1}A_{2n})\ge \frac {\pi k}2.$$
(Indices are taken mod $2n$ .)

*Rohan Bodke*
