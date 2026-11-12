---
tag: NV7704SGGX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2012 Canadian Mathematical Olympiad Qualification Repechage
    url: https://artofproblemsolving.com/community/c6h590327
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=7726
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ca-cmoqr/2012
    source: hf-ai-mo-aops
    label: 2012 Canadian Mathematical Olympiad Qualification Repechage
---
Given a positive integer $n$ , let $d(n)$ be the largest positive divisor of $n$ less than $n$ . For example, $d(8) = 4$ and $d(13) = 1$ . A sequence of positive integers $a_1, a_2,\dots$ satisfies $$a_{i+1} = a_i +d(a_i),$$ for all positive integers $i$ . Prove that regardless of the choice of $a_1$ , there are inﬁnitely many
terms in the sequence divisible by $3^{2011}$ .
