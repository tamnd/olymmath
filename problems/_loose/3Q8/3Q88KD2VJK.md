---
tag: 3Q88KD2VJK
kind: problem
type: answer
answer: "1"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90143
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given an $n \times n$ matrix whose entries $a_{i j}$ satisfy $a_{i j}=\frac{1}{i+j-1}, n$ numbers are chosen from the matrix no two of which are from the same row or the same column. Prove that the sum of these $n$ numbers is at least 1 .
