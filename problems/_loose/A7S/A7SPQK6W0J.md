---
tag: A7SPQK6W0J
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=82735
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We have a $3 \times 3$ square in which integers are written. We choose two adjacent squares (i.e., squares that share a side), and we add the same integer to the numbers in each of these squares. Can we go from the left position to the right position?

| 1 | 2 | 3 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 4 | 5 | 6 |
| 7 | 8 | 9 | | 7 | 9 | 2 |
| :--- | :--- | :--- |
| 3 | 5 | 6 |
| 1 | 4 | 8 |
