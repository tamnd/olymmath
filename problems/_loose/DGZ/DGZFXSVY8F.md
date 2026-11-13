---
tag: DGZFXSVY8F
kind: problem
type: answer
answer: first player
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Ukraine/train/0000.parquet#row=317
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ua-umo
    source: hf-mathnet
    label: Ukraine Ukrainian Mathematical Olympiad
---
Two players play the following game. They start with the polynomial $2013x^2 + 2012x + 2011$ and take moves by turns. During each move a player subtracts from the polynomial one of the following polynomials: $x^2$, $x$, $x^2 - x + 1$ or $x^2 + x - 1$, at his choice. If after a player's move the polynomial has an integer root, he loses. Which of the players has a winning strategy?
