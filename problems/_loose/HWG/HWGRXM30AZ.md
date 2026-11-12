---
tag: HWGRXM30AZ
kind: problem
type: answer
answer: "10"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=37234
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Two players take turns placing crosses and noughts in the cells of a $9 \times 9$ square (the first player places crosses, and the opponent places noughts). At the end, the number of rows and columns where there are more crosses than noughts is counted - these are the points scored by the first player. The number of rows and columns where there are more noughts - the points scored by the second player. How can the first player win (score more points)?
