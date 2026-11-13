---
tag: YNARRR45BP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=81067
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider a $M \times N$ table (with $M$ rows and $N$ columns), which contains more columns than rows $(N>M)$. We place stars in some cells of the table, and assume that each row and each column contains at least one star. Show that there exists a cell containing a star such that the number of stars on its row is strictly greater than the number of stars on its column.
