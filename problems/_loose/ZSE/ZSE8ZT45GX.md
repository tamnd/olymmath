---
tag: ZSE8ZT45GX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=250943
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Saudi_Arabia/train/0001.parquet#row=211
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
$2000$ consecutive integers (not necessarily positive) are written on the board. A student takes several turns. On each turn, he partitions the $2000$ integers into $1000$ pairs, and substitutes each pair by the difference arid the sum of that pair (note that the difference does not need to be positive as the student may choose to subtract the greater number from the smaller one; in addition, all the operations are carried simultaneously). Prove that the student will never again write $2000$ consecutive integers on the board.
