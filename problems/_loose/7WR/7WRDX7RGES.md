---
tag: 7WRDX7RGES
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=164840
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
On a spherical map, every point on the borders belongs to 2 or 3 countries.

We call those border points vertices, which belong to three countries. The segment of the border between two different vertices, not containing any vertex, is called an edge.

At every vertex, 3 edges meet.

Two countries are adjacent if they have a common border point.

The map was colored with red, yellow, blue, and green such that adjacent countries have different colors.

Prove that the total number of red and blue countries, which have an odd number of vertices on their borders, is even.
