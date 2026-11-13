---
tag: TH26Z5N5RB
kind: problem
type: answer
answer: "74"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=93069
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In the Cartesian coordinate system $x O y$, an ant moves from point $P(-3,-3)$ to point $Q(3,3)$ according to the following rules:
(1) Each step must either add 1 to the x-coordinate or add 1 to the y-coordinate;
(2) At any time, the coordinates $(x, y)$ of the point where the ant is located must satisfy $|x| \geqslant 2$ or $|y| \geqslant 2$.
How many different ways can the ant move in total?
