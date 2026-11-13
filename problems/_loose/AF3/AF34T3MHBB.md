---
tag: AF34T3MHBB
kind: problem
type: answer
answer: "18"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=113337
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In a Cartesian coordinate system, take $\mathrm{n}$ points such that no three points are collinear, and color each point in one of three colors: red, green, or yellow, so that the following conditions are met:
(1) In any triangle with all vertices red, there is at least one green point inside;
(2) In any triangle with all vertices green, there is at least one yellow point inside;
(3) In any triangle with all vertices yellow, there is at least one red point inside. Find the maximum value of the positive integer $\mathrm{n}$.
