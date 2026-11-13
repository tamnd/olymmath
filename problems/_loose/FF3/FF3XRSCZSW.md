---
tag: FF3XRSCZSW
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
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=76973
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Nela and Jane choose positive integer $k$ and then play a game with a $9 \times 9$ table. Nela selects in every of her moves one empty unit square and she writes 0 to it. Jane writes 1 to some empty (unit) square in every her move. Furthermore $k$ Jane's moves follows each Nela's move and Nela starts. If sum of numbers in each row and each column is odd anytime during the game, Jane wins. If girls fill out the whole table (without Jane's win), Nela wins. Find the least $k$ such that Jane has the winning strategy.

(Michal Rolínek)
