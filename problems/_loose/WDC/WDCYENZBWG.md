---
tag: WDCYENZBWG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=77016
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Czech_Republic/train/0000.parquet#row=31
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cz-sk-mo
    source: hf-mathnet
    label: Czech Republic 63rd Czech and Slovak Mathematical Olympiad
---
We are given a sheet of paper in the form of a rectangle $x \times y$, where $x$ and $y$ are integer numbers larger than 1. Let us draw a lattice of $x \cdot y$ unite squares on the sheet. Rolling up the rectangle and gluing it along its opposite sides we shape a lateral surface of a circular cylinder. Join each two distinct vertices of the marked unit squares on the surface by a segment. How many of all these segments are passing through an interior point of the cylinder? In the case $x>y$ decide when this number of "internal" segments is larger - for the cylinder with bases of perimeter $x$, or $y$ ?

(Vojtech Bálint)
