---
tag: SXXN23XD9Z
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90630
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0000.parquet#row=149
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A group of mathematicians is lost in a forest. The forest has a shape of an infinite strip that is 1 mile wide. Prove that they can choose a path that will guarantee them a way out and that is at most $2 \sqrt{2}$ miles long.

Remark. The mathematicians have no device for orientation and no maps. All they know is that the forest is a region between two parallel lines 1 mile appart from each other. They can't see the end of the forest, unless they are at the edge. However, they can precisely follow any path they design, e.g. they can move along straight line, circle, etc.
