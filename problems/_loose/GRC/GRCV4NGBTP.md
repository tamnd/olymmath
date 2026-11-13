---
tag: GRCV4NGBTP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=250811
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Saudi_Arabia/train/0000.parquet#row=405
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: sa-samc
    source: hf-mathnet
    label: Saudi Arabia SAUDI ARABIAN MATHEMATICAL COMPETITIONS
---
In the garden of Wonderland, there are $2016$ apples, $2017$ bananas and $2018$ oranges.Two monkeys Adu and Bakar play the following game: alternatively each of them takes and eats one fruit of any kind except for the one that he took in previous turn (in the first turn, each of them can take a fruit of any kind). Who can not take a fruit is the loser. Which monkey has the winning strategy if Adu plays first?
