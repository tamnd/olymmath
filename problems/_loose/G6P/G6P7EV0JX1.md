---
tag: G6P7EV0JX1
kind: problem
type: answer
answer: Bob cannot win; Bob should choose starting number 9.
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Austria/train/0000.parquet#row=175
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Alice and Bob play a game that allows the playing numbers $19$ and $20$ and the two possible starting numbers $9$ and $10$. Alice chooses her playing number and assigns the remaining playing number to Bob while Bob independently chooses the starting number.

Alice adds her playing number to the starting number, Bob adds his playing number to the sum, then Alice again adds her playing number to this new sum and so on. The game lasts till the number $2019$ is reached or exceeded.

A player who obtains exactly $2019$ wins. If $2019$ is exceeded, the game ends in a draw.

* Show that Bob cannot win.
* Which starting number does Bob have to choose in order to prevent Alice from winning?
