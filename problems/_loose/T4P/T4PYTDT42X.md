---
tag: T4PYTDT42X
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=227305
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
You have a $10 \times 10$ grid. A "move" on the grid consists of moving $7$ squares to the right and $3$ squares down. In case of exiting by a line, it continues at the beginning (left) of the same line and in case of ending a column, it continues at the beginning of the same column (above). Where should we start so that after $1996$ moves we end up in a corner?
