---
tag: R7H7YSMXW9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=250813
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Saudi_Arabia/train/0000.parquet#row=425
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
The $64$ cells of an $8 \times 8$ chessboard have $64$ different colours. A Knight stays in one cell. In each move, the Knight jumps from one cell to another cell (the $2$ cells on the diagonal of an $2 \times 3$ board) also the colours of the $2$ cells interchange. In the end, the Knight goes to a cell having common side with the cell it stays at first. Can it happen that: there are exactly $3$ cells having the colours different from the original colours?
