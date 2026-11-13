---
tag: R45RYH04WY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2019 Greece National Olympiad
    url: https://artofproblemsolving.com/community/c6h1800067
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=17647
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=219238
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: gr-hms/2019
    source: hf-ai-mo-aops
    label: 2019 Greece National Olympiad
---
Given a $n\times m$ grid we play the following game . Initially we place $M$ tokens in each of $M$ empty cells and at the end of the game we need to fill the whole grid with tokens.For that purpose we are allowed to make the following move:If an empty cell shares a common side with at least two other cells that contain a token then we can place a token in this cell.Find the minimum value of $M$ in terms of $m,n$ that enables us to win the game.
