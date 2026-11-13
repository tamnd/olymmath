---
tag: 6PGKHYRGMZ
kind: problem
type: answer
answer: '{14,19},{15,18},{16,17}'
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=85926
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We have two two-digit integers, which do not start with a 0. If you add these numbers together, you get the number $S$. If you swap the two digits of both numbers and add these two new numbers together, you get $4S$.

Determine all possible pairs of two-digit numbers for which this is true. Clearly indicate in your answer which two numbers belong together.
