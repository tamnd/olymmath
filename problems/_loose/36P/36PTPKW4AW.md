---
tag: 36PTPKW4AW
kind: problem
type: answer
answer: "1008"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=77330
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Anna and Baptiste are playing the following game. At the beginning of the game, 2022 white squares, numbered from 1 to 2022, are placed in front of them. Then, taking turns, starting with Anna, they choose a white square and color it in the color of their choice: either red or blue. The game ends after 2022 turns, that is, when the last white square is colored.

Anna's score is then equal to the number of integers $a \leqslant 2019$ such that the two squares numbered $a$ and $a+3$ are the same color. Anna wants to have the highest score possible; Baptiste wants Anna's score to be as low as possible. What is the highest score Anna can ensure, regardless of the moves Baptiste chooses to play?
