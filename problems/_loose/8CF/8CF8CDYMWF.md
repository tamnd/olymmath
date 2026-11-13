---
tag: 8CF8CDYMWF
kind: problem
type: answer
answer: 60ballsA,36ballsB,4ballsC
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=184276
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given are three different types of balls; there are 100 pieces of each type:

Type $A$: balls with a mass of $0.3 \mathrm{~g}$ each,

Type $B$: balls with a mass of $1.5 \mathrm{~g}$ each,

Type $C$: balls with a mass of $7.0 \mathrm{~g}$ each.

Investigate whether it is possible to select exactly 100 balls from these such that their total mass is exactly $100 \mathrm{~g}$! If this is the case, determine all such possibilities for the three quantities of balls to be selected from types $A, B$, and $C$!
