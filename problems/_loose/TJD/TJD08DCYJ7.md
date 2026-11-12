---
tag: TJD08DCYJ7
kind: problem
type: answer
answer: when\n\is\not\multiple\of\4
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=56446
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In a pile of $n$ stones, two players take turns. On a turn, a player can take from the pile a number of stones equal to a prime divisor of the current number of stones in the pile, or equal to 1. The player who takes the last stone wins. For which $n$ can the starting player always play in such a way as to win, regardless of how the opponent plays?
