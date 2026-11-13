---
tag: YASHT8BJN5
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=128772
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a positive integer $n$. Divide $n$ people into two groups (the two groups are different, and it is allowed for one group to be empty), such that in the group each person is in, there is an even number of people who are their friends, and friendship is mutual. Prove: For any positive integer $n$, regardless of the friendship relations among these people, there exists a positive integer $k$, such that the number of different ways to divide the group is $2^{k}$.
