---
tag: EMBN540GWE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=81984
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The numbers $1,2, \ldots, 2023$ are written on the board. Aurélien and Benoît play the following game in turns: the active player chooses two integers $a, b$ written on the board, erases them, and replaces them with one of the integers $a \cdot b, a-b$, or $a+b$. Benoît wins if the last number written on the board is divisible by 2023, and Aurélien wins otherwise. Aurélien starts. Which player has a winning strategy?
