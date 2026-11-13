---
tag: F3E2V2QMTG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2015 NIMO Problems
    url: https://artofproblemsolving.com/community/c6h622190
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=12874
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=214782
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: nimo/2015
    source: hf-ai-mo-aops
    label: 2015 NIMO Problems
---
How many $5$ -digit numbers $N$ (in base $10$ ) contain no digits greater than $3$ and satisfy the equality $\gcd(N,15)=\gcd(N,20)=1$ ? (The leading digit of $N$ cannot be zero.)

*Based on a proposal by Yannick Yao*
