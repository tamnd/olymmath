---
tag: 3JYYEEQP0Y
kind: problem
type: answer
answer: Mari has a winning strategy; the least number of her turns needed to guarantee victory is 5.
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Estonia/train/0001.parquet#row=189
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ee-mo
    source: hf-mathnet
    label: Estonia Estonian Mathematical Olympiad
---
Mari and Jüri play the following game on an infinite grid: They take turns with Mari starting, Mari colours one uncolored square red in each of her turns, Jüri colours one uncolored square blue in each of his turns. If the centers of any four squares of the same colour form the corners of some square, then this player wins. Does either player have a winning strategy? If so, what is the least number of turns to guarantee a victory?
