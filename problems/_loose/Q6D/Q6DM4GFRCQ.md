---
tag: Q6DM4GFRCQ
kind: problem
type: answer
answer: "36"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=77126
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Czech_Republic/train/0000.parquet#row=165
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cz-sk-mo
    source: hf-mathnet
    label: Czech Republic 72nd Czech and Slovak Mathematical Olympiad
---
Alice and Ben play the game on a board with 72 cells around a circle. First, Ben chooses some cells and places one chip on each of them. Each round, Alice first chooses one empty cell and then Ben moves a chip from one of the adjacent cell onto the chosen one. If Ben fails to do so, the game ends; otherwise, another round follows. Determine the smallest number of chips for which Ben can guarantee that the game will last for at least 2023 rounds.

(Václav Blažej)
