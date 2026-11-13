---
tag: DBKASFEQ85
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Iran/train/0000.parquet#row=236
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo
    source: hf-mathnet
    label: Iran 37th Iranian Mathematical Olympiad
---
Polynomial $x^{1398} + 1$ is written on the board. Roozbeh and Keyvan play the following game in turns. Starting from Roozbeh, each player in their turn chooses an integer $0 \le k \le 1398$ and adds up $x^k$ with the polynomial on the board. Each time after Keyvan's turn, if there exists a real number $x$ such that the polynomial on the board takes negative value,

Roozbeh wins and Keyvan loses. Otherwise, the game continues. Prove that no matter how Roozbeh plays, Keyvan can play in a way that he never loses.
