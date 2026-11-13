---
tag: VPS4NQ2KH0
kind: problem
type: answer
answer: "Yes"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Balkan_Mathematical_Olympiad/train/0000.parquet#row=248
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: balkan-sl
    source: hf-mathnet
    label: Balkan Mathematical Olympiad Balkan Mathematical Olympiad Shortlisted Problems
---
A social network has $2025$ users. Two different users are either friends or not friends. A user is considered *lonely* if they have no friends. Initially, there are no lonely users, and two users Alice and Bob are not friends. A user may swap all their friends, meaning if they were friends with someone before the swap, they are no longer friends, and vice versa. Must there exist a way to arrange the $2025$ users in a sequence so that if, one-by-one in that sequence, each user swaps their friends, no user is ever lonely at any point during the process?
