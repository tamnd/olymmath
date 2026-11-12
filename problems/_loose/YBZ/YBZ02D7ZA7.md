---
tag: YBZ02D7ZA7
kind: problem
type: answer
answer: "700"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=20827
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Hansel and Gretel are playing a game, with Hansel going first. They take turns placing tokens on a $7 \times 8$ grid (7 rows and 8 columns). Each time Gretel places a token, she earns 4 points for each token already in the same row and 3 points for each token already in the same column.

Only one token can be placed on each cell. The game ends when all cells on the board are filled.

What is the maximum number of points Gretel can score regardless of Hansel's actions?
