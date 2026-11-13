---
tag: X13JWA0FYX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=85221
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Moldova/train/0000.parquet#row=45
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: md-mo
    source: hf-mathnet
    label: Moldova Olimpiada Republicană la Matematică
---
Let $a, b$ and $c$ be the lengths of the sides of an arbitrary triangle with a perimeter equal to 1.

Show that the relation $\frac{1}{a}+\frac{1}{b}+\frac{1}{c}>\frac{9}{\sqrt{1-a}+\sqrt{1-b}+\sqrt{1-c}}$ holds.
