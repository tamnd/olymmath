---
tag: Q9Q1XD1H0X
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=266182
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Ten square tiles are placed in a row, and each can be painted with one of the four colors red (R), yellow (Y), blue (B), and white (W). Find the number of ways this can be done so that each block of five adjacent tiles contains at least one tile of each color. That is, count the patterns RWBWYRRBWY and WWBYRWYBWR but not RWBYYBWWRY because the five adjacent tiles colored BYYBW does not include the color red.
