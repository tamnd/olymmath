---
tag: F0S3DHYWH5
kind: problem
type: answer
answer: "20"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=103613
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A clue " $k$ digits, sum is $n$ " gives a number $k$ and the sum of $k$ distinct, nonzero digits. An answer for that clue consists of $k$ digits with sum $n$. For example, the clue "Three digits, sum is 23 " has only one answer: $6,8,9$. The clue "Three digits, sum is 8 " has two answers: $1,3,4$ and $1,2,5$.
If the clue "Four digits, sum is $n$ " has the largest number of answers for any four-digit clue, then what is the value of $n$ ? How many answers does this clue have? Explain why no other four-digit clue can have more answers.
