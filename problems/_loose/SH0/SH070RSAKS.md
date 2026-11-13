---
tag: SH070RSAKS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=131229
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Two players, A and B, are playing a game on a $19 \times 94$ grid. Each player can color a $k \times k (1 \leqslant k \leqslant 19)$ square with grid lines as its sides on each turn, but the square must not contain any already colored parts, meaning each small square can only be colored once. Player A starts, and they take turns. The player who colors the last small square wins. Who has a winning strategy if both players play optimally? Explain your reasoning.
