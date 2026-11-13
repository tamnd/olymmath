---
tag: JP46C8QR0G
kind: problem
type: answer
answer: "394"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=122840
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A kind of single-player card game, its rules are as follows: Place 6 pairs of different cards into a backpack, the player randomly draws and returns cards each time, but when a pair is drawn, it is placed aside. If the player always draws three cards each time, and if the three cards drawn are all different (i.e., no pairs), the game ends; otherwise, drawing continues until the backpack is empty. Let the probability that the backpack is empty be $\frac{p}{q}$, where $p$ and $q$ are coprime positive integers, find $p+q$.
