---
tag: MWWZ7X69JY
kind: problem
type: answer
answer: Thefirstplayerwins.Thefirstmovecanbe,forexample,subtracting1,4,16
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=56119
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The game starts with the number 1000. On a turn, a player is allowed to subtract from the current number any natural number that is a power of two and does not exceed it $\left(1=2^{0}\right)$. The player who reaches zero wins.
