---
tag: HKP1RRQPN3
kind: problem
type: answer
answer: Nana
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Austria/train/0000.parquet#row=224
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: at-oemo
    source: hf-mathnet
    label: Austria Austrian Mathematical Olympiad
---
Initially, the numbers $1, 2, \ldots, 2024$ are written on a blackboard. Trixi and Nana play a game, taking alternate turns. Trixi plays first.

The player whose turn it is chooses two numbers $a$ and $b$, erases both, and writes their (possibly negative) difference $a - b$ on the blackboard. This is repeated until only one number remains on the blackboard after $2023$ moves. Trixi wins if this number is divisible by $3$, otherwise Nana wins.

Which of the two has a winning strategy?

(Birgit Vera Schmidt)
