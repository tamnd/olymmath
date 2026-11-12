---
tag: SJ5NTVF0QZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2024 Iran MO (2nd Round)
    url: https://artofproblemsolving.com/community/c6h3303555
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=1803
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo-r2/2024
    source: hf-ai-mo-aops
    label: 2024 Iran MO (2nd Round)
---
Sahand and Gholam play on a $1403\times 1403$ table. Initially all the unit square cells are white. For each row and column there is a key for it (totally 2806 keys). Starting with Sahand players take turn alternatively pushing a button that has not been pushed yet, until all the buttons are pushed. When Sahand pushes a button all the cells of that row or column become black, regardless of the previous colors. When Gholam pushes a button all the cells of that row or column become red, regardless of the previous colors. Finally, Gholam's score equals the number of red squares minus the number of black squares and Sahand's score equals the number of black squares minus the number of red squares. Determine the minimum number of scores Gholam can guarantee without if both players play their best moves.
