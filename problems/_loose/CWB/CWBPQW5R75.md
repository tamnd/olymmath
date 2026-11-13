---
tag: CWBPQW5R75
kind: problem
type: answer
answer: P(n) = 1 if n is a power of two; otherwise P(n) = 2.
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Taiwan/train/0001.parquet#row=172
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be a positive integer. Two squirrels, Bushy and Jumpy, have collected $n$ walnuts for the winter. One day, Jumpy noticed that Bushy have made the walnuts into $n$ piles, with a single walnut in each pile. "That's way too many piles!" Unhappy, Jumpy decides to do the following actions: for each action, he chooses two piles, take equal amounts of walnuts from the two piles, and combine them into a new pile. Jumpy's goal is to make $P$, the number of nonempty piles, as small as possible. For each positive integer $n$, find the smallest possible $P$ that Jumpy can achieve through finitely many actions.
