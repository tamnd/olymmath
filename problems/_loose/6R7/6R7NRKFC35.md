---
tag: 6R7NRKFC35
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=236727
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A circular game board is divided into $n \ge 3$ sectors. Each sector is either empty or occupied by a marker. In each step one chooses an occupied sector, removes its marker and then switches each of the two adjacent sectors from occupied to empty or vice-versa. Starting with a single occupied sector, for which $n$ is it possible to end up with all empty sectors after finitely many steps?
