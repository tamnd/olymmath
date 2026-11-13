---
tag: TYKAVFNWZG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=77695
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider a $2018 \times 2018$ table where each cell contains a non-zero natural number. Noémie modifies these numbers at her discretion, applying the following operations: $\triangleright$ choose a row and then multiply by 2 all the numbers in this row;

$\triangleright$ choose a column and then subtract 1 from all the numbers in this column. Show that, by applying these operations, Noémie can manage to obtain a table where each cell contains the number 0.
