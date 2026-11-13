---
tag: M1P78V8WWJ
kind: problem
type: answer
answer: "28"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=123892
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider the $8 \times 8 \times 8$ Rubik's cube below. Each face is painted with a different color, and it is possible to turn any layer, as you can with smaller Rubik's cubes. Let $X$ denote the move that turns the shaded layer shown (indicated by arrows going from the top to the right of the cube) clockwise by 90 degrees, about the axis labeled $X$. When move $X$ is performed, the only layer that moves is the shaded layer. Likewise, define move $Y$ to be a clockwise 90-degree turn about the axis labeled $Y$, of just the shaded layer shown (indicated by the arrows going from the front to the top, where the front is the side pierced by the $X$ rotation axis). Let $M$ denote the move "perform $X$, then perform $Y$."

Imagine that the cube starts out in "solved" form (so each face has just one color), and we start doing move $M$ repeatedly. What is the least number of repeats of $M$ in order for the cube to be restored to its original colors?
