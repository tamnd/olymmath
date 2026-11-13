---
tag: EK62G9N8XB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=97681
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Fill $n$ distinct real numbers in increasing order into the first row of a $3 \times n$ grid, and then fill these $n$ numbers in some order into the second row of the grid. Add the two numbers in each column, and place the sum in the third cell of that column. It is known that the numbers in the third row are in strictly increasing order. Prove that the numbers in the first row are the same as those in the second row.
