---
tag: WCDN3ANTEV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=252978
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In an $2023\times 2023$ grid we fill in numbers $1,2,\cdots,2023^2$ without duplicating. Find the largest integer $M$ such that there exists a way to fill the numbers, satisfying that any two adjacent numbers has a difference at least $M$ (two squares $(x_1,y_1),(x_2,y_2)$ are adjacent if $x_1=x_2$ and $y_1-y_2\equiv \pm1\pmod{2023}$ or $y_1=y_2$ and $x_1-x_2\equiv \pm1\pmod{2023}$).

*Proposed by chengbilly.*
