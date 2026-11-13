---
tag: Q1T91CX4TG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=97887
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A game is played on a $1 \times 2006$ grid, with the following rules: Two players take turns filling in an empty cell with $\mathrm{S}$ or $\mathrm{O}$. The player who first forms $\mathrm{SOS}$ in three consecutive cells wins. If no $\mathrm{SOS}$ appears after the grid is filled, the game is a draw. Prove: The second player has a winning strategy.
