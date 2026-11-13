---
tag: 64KA23RFZS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90323
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0000.parquet#row=185
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Ten cups lie upside down in a line. It is known that pennies lie under two of the cups which are consecutive in the line. Choosing several of the cups, you may ask for the total number of coins under them. Is it possible to determine the positions of the pennies by asking two such questions, without knowing the answer to the first question before making the second?
