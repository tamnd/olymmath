---
tag: WAR3F7TZ80
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=169000
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Anna and Balázs play the following game. They write down the positive integers from 1 to 100 on a piece of paper, side by side, then in the 99 spaces between the numbers, they alternately, each time at their discretion, write one of the addition $(+)$, subtraction $(-)$, or multiplication $(\times)$ operation symbols. After they have written down the symbols in all 99 places, they calculate the number obtained after performing the operations - without using parentheses - and if this number is even, Anna wins, if it is odd, Balázs wins.

Prove that the one who starts can always win the game.
