---
tag: JSN9NVE4TK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=176424
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Show that if a number in the decimal system is divided by 99, we get the same remainder as if we split the number from right to left into groups of two digits (the last group can be one digit), summed these two-digit groups, and then divided the sum by 99. (E.g., 4453317 is divisible by 99 because $17+33+45+4=99$.)
