---
tag: JKWKVTBKSF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Baltic_Way/train/0000.parquet#row=412
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: baltic-way
    source: hf-mathnet
    label: Baltic Way BALTIC WAY
---
Bob tries to create a game for two players. He has decided that the game is to be played on a board with $n \times m$ squares. The first player marks not more than $x$ squares on the board. Then the second player tries to find $p$ squares in a row, horizontally, vertically or diagonally that have not been marked by the first player. The second player wins if he or she can find such squares, and the first player wins if the second player does not find such squares before the sun goes down.

Alice claims that if $p$ is a prime greater than 3 and $x = \lfloor \frac{mn}{p} \rfloor$, then the first player can always win by marking the correct squares.

Prove that Alice is correct.
