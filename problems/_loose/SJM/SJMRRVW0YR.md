---
tag: SJMRRVW0YR
kind: problem
type: answer
answer: "161"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=214707
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
How many distinct positive integers can be expressed in the form $ABCD - DCBA$, where $ABCD$ and $DCBA$ are 4-digit positive integers? (Here $A$, $B$, $C$ and $D$ are digits, possibly equal.)
Clarification: $A$ and $D$ can't be zero (because otherwise $ABCD$ or $DCBA$ wouldn't be a true 4-digit integer).
