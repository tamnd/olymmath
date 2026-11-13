---
tag: FEZ7PCW4XX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2019 CMIMC
    url: https://artofproblemsolving.com/community/c6h1774503
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=17521
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=219122
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cmimc/2019
    source: hf-ai-mo-aops
    label: 2019 CMIMC
---
In the game of Ric-Rac-Roe, two players take turns coloring squares of a $3 \times 3$ grid in their color; a player wins if they complete a row or column of their color on their turn. If Alice and Bob play this game, picking an uncolored square uniformly at random on their turn, what is the probability that they tie?
