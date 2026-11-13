---
tag: MA8PKH839A
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 25th Philippine MO Area Stage
    url: https://artofproblemsolving.com/community/c6h3501204
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=50737
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=154595
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Philippines/train/0001.parquet#row=345
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ph-pmo
    source: hf-ai-mo-aops
    label: 25th Philippine MO Area Stage
  - at: ph-pmo
    source: hf-mathnet
    label: Philippines 25th Philippine Mathematical Olympiad Area Stage
---
A game is played on the number line. Initially, there is a token placed at the number 0. In each move, the player can move the token from its current position x, to either $x + 2023$ or $x - 59$ . The goal of the game is to move the token to either 1 or -1. What is the minimum number of moves required to achieve this goal?
