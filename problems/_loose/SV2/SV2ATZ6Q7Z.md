---
tag: SV2ATZ6Q7Z
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=21642
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There is an unpainted board $101 \times 201$. The first player has a bucket of yellow paint, the second player has a bucket of blue paint. On each turn, each player can paint a row (horizontal or vertical) with their color. When yellow and blue paints mix, they produce green. Further mixing of green with yellow or blue does not change the color. A player cannot paint a row if that row has already been painted by the opponent, nor can they paint a row if no cell on the board will change color. The player who cannot make a move loses. Who can ensure a win?
