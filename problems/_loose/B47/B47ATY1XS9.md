---
tag: B47ATY1XS9
kind: problem
type: answer
answer: 22,14,4024,180
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=138759
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0004.parquet#row=136
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A set of identical square tiles with side length 1 is placed on a (very large) floor. Every tile after the first shares an entire edge with at least one tile that has already been placed.
- What is the largest possible perimeter for a figure made of 10 tiles?
- What is the smallest possible perimeter for a figure made of 10 tiles?
- What is the largest possible perimeter for a figure made of 2011 tiles?
- What is the smallest possible perimeter for a figure made of 2011 tiles?
Prove that your answers are correct.
