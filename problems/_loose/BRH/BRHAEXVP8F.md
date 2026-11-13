---
tag: BRHAEXVP8F
kind: problem
type: answer
answer: "30"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=165130
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We are making colored cubes according to the following specifications.

I. Each face of the cube is divided into two triangles by one of its diagonals, such that each endpoint of the drawn diagonal connects to two other such diagonals.

II. The two triangles on each face must be of different colors.

III. The triangles that meet along an edge must be of the same color.

How many different cubes can we make using 6 colors? (We do not consider two cubes different if they can be positioned so that from any angle, the faces we see are identically colored.)
