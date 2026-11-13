---
tag: QYEB5Z7NV9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90903
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0007.parquet#row=344
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
You are blindfolded and have a spinning table with four switches on it in front of you. The switches are always either up or down, and you don't know what configuration they start in. On each move, you can spin the table some unknown amount, then
reach out and choose two switches (either next to each other or diagonally opposite each other), feel whether they are up or down, and then choose to flip one, both, or neither of them. You win if you turn the switches either all up or all down. Determine whether it is always possible to win the game.
