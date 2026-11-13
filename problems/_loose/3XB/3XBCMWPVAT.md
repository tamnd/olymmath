---
tag: 3XBCMWPVAT
kind: problem
type: answer
answer: "1014"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=154180
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Philippines/train/0000.parquet#row=118
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ph-pmo
    source: hf-mathnet
    label: Philippines Area Stage
---
Placed on a really long table are 2011 boxes each containing a number of balls. The 1st and the 2nd box together contain 15 balls, the 2nd and the 3rd box together contain 16 balls, the 3rd and the 4th box together contain 17 balls, and so on. If the first and the last box together contain a total of 1023 balls, how many balls are contained in the last box?
