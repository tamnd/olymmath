---
tag: 8BAJT4ZH78
kind: problem
type: answer
answer: "n + \v(-1 + (-1)^{n+1})/2"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Belarus/train/0001.parquet#row=228
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: by-mo
    source: hf-mathnet
    label: Belarus 69th Belarusian Mathematical Olympiad
---
Peter and Andrey play the game on the $n \times 1$ board, making moves alternate. Peter starts, and on his turn he places "+" to any empty cell. Andrey on his turn places "-" to any empty cell. The game is finished when all cells are filled. Peter's prize equals to the greatest number $k$ such that for each $\ell$ from 1 to $k$ there are $\ell$ successive cells, the amount of pluses on which is greater than the amount of minuses.
Find the maximal prize which Peter can guarantee for himself.
