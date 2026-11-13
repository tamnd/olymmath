---
tag: 62YZQ5TNJK
kind: problem
type: answer
answer: "No"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Russia/train/0000.parquet#row=360
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian
    source: hf-mathnet
    label: Russia LI Всероссийская математическая олимпиада школьников
---
Petr and Basil play a game on an initially empty checkered table $100 \times 100$, making moves in turn. Petr starts. During his turn, the player writes any (capital) letter of the English alphabet into some empty cell (exactly one letter can be written in each cell). When all the cells are filled, Petr is declared the winner if there exist four consecutive cells horizontally in which the word "PETR" is written from left to right, or, if there exist four consecutive cells vertically in which the word "PETR" is written from top to bottom. Determine if Petr can win (regardless of Basil's actions).
