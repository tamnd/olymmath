---
tag: DBDY4N54WZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=211804
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
$10000$ nonzero digits are written in a $100$-by-$100$ table, one digit per cell. From left to right, each row forms a $100$-digit integer. From top to bottom, each column forms a $100$-digit integer. So the rows and columns form $200$ integers (each with $100$ digits), not necessarily distinct. Prove that if at least $199$ of these $200$ numbers are divisible by $2013$, then all of them are divisible by $2013$.
