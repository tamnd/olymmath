---
tag: EZ5QS6Y8CE
kind: problem
type: answer
answer: "3"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=75037
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Nela and Jana choose a natural number $k$ and then play a game with a $9 \times 9$ table. Starting with Nela, each player, on their turn, selects an empty cell and writes a zero in it. Jana, on her turn, writes a one in some empty cell. Additionally, after each of Nela's moves, Jana makes $k$ moves. If at any point during the game, the sum of the numbers in each row and each column is odd, Jana wins. If the girls fill the entire table without this happening, Nela wins. Find the smallest value of $k$ for which Jana has a winning strategy.
