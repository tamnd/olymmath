---
tag: PX4XYZ9G4B
kind: problem
appearances:
  - at: pumac/2015/nb4
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2015 official paper
    url: https://pumac.princeton.edu/s/PUMaC2015_NumberTheoryB.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2015 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h1601143
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=12993
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=214900
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A circle with radius $1$ and center $(0, 1)$ lies on the coordinate plane. Ariel stands at the origin and rolls a ball of paint at an angle of $35$ degrees relative to the positive $x$ -axis (counting degrees counterclockwise). The ball repeatedly bounces off the circle and leaves behind a trail of paint where it rolled. After the ball of paint returns to the origin, the paint has traced out a star with $n$ points on the circle. What is $n$ ?
