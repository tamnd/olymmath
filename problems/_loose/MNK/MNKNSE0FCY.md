---
tag: MNKNSE0FCY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2020 Tournament Of Towns
    url: https://artofproblemsolving.com/community/c6h2112442
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=19504
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=221043
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tot
    source: hf-ai-mo-aops
    label: 2020 Tournament Of Towns
---
Given an endless supply of white, blue and red cubes. In a circle arrange any $N$ of them. The robot, standing in any place of the circle, goes clockwise and, until one cube remains, constantly repeats this operation: destroys the two closest cubes in front of him and puts a new one behind him a cube of the same color if the destroyed ones are the same, and the third color if the destroyed two are different colors.
We will call the arrangement of the cubes *good* if the color of the cube remaining at the very end does not depends on where the robot started. We call $N$ *successful* if for any choice of $N$ cubes all their arrangements are good. Find all successful $N$ .

I. Bogdanov
