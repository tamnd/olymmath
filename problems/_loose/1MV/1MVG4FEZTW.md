---
tag: 1MVG4FEZTW
kind: problem
type: answer
answer: "100"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=52686
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The numbers $1, 1/2, 1/3, \ldots, 1/100$ are written on the board. We choose two arbitrary numbers $a$ and $b$ from those written on the board, erase them, and write the number

$a + b + ab$. We perform this operation 99 times until only one number remains. What is this number? Find it and prove that it does not depend on the sequence of number selections.
