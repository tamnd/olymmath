---
tag: M2R7FVJB1J
kind: problem
type: answer
answer: notfound
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=8700
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Anya and Borya are playing "battleship" according to the following rules: 29 different points are chosen on a circle, numbered clockwise with natural numbers from 1 to 29. Anya draws a ship - an arbitrary triangle with vertices at these points. Borya (not knowing the location of Anya's ship) makes a "shot": he names two different natural numbers $k$ and $m$ from 1 to 29, and if the segment with endpoints at points numbered $k$ and $m$ coincides with one of the sides of Anya's triangle, the ship is considered "wounded." Can Borya, playing thoughtfully, guarantee to "wound" the ship, no matter where Anya places it, by making no more than 134 shots?
