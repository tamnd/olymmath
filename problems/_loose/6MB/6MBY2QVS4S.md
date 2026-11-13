---
tag: 6MBY2QVS4S
kind: problem
type: answer
answer: \frac{1}{6}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=210311
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n\geq 3$ be integer. Given two pairs of $n$ cards numbered from 1 to $n$. Mix the $2n$ cards up and take the card 3 times every one card. Denote $X_1,\ X_2,\ X_3$ the numbers of the cards taken out in this order taken the cards. Find the probabilty such that $X_1<X_2<X_3$. Note that once a card taken out, it is not taken a back.
