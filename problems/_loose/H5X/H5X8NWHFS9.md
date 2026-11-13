---
tag: H5X8NWHFS9
kind: problem
type: answer
answer: Color one cell in each row at columns 26 and 39; the maximum number of subrectangles is 3380.
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Mongolia/train/0001.parquet#row=262
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: mn-mo/2025
    source: hf-mathnet
    label: Mongolia MMO2025 Round 3
---
Two cells of a $2 \times 64$ grid are to be colored. A subrectangle is defined as a rectangle whose sides are aligned with the grid lines and whose vertices lie on grid points. Determine which two cells should be colored so that the number of subrectangles containing at least one of the two colored cells is maximized. What is the maximum possible number of such subrectangles?
(Batbayasgalan Balkhuu)
