---
tag: ST2CBXQDP7
kind: problem
type: answer
answer: "4"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=11626
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The park is a $10 \times 10$ grid of cells. A lamp can be placed in any cell (but no more than one lamp per cell).

a) The park is called illuminated if, no matter which cell a visitor is in, there is a $3 \times 3$ square of 9 cells that contains both the visitor and at least one lamp. What is the minimum number of lamps in an illuminated park?

b) The park is called reliably illuminated if it remains illuminated even after the failure of any one lamp. What is the minimum number of lamps in a reliably illuminated park?
