---
tag: 2EGZVRA65V
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2018 Iran MO (3rd Round)
    url: https://artofproblemsolving.com/community/c6h1699337
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=16652
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=218289
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo/2018
    source: hf-ai-mo-aops
    label: 2018 Iran MO (3rd Round)
---
Alice and Bob are play a game in a $(2n)*(2n)$ chess boared.Alice starts from the top right point moving 1 unit in every turn.Bob starts from the down left square and does the same.The goal of Alice is to make a closed shape ending in its start position and cannot reach any point that was reached before by any of players .if a players cannot move the other player keeps moving.what is the maximum are of the shape that the first player can build with every strategy of second player.
