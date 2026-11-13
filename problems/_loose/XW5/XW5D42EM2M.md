---
tag: XW5D42EM2M
kind: problem
type: answer
answer: "4"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=265175
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A blind ant is walking on the coordinate plane. It is trying to reach an anthill, placed at all points where both the $x$-coordinate and $y$-coordinate are odd. The ant starts at the origin, and each minute it moves one unit either up, down, to the right, or to the left, each with probability $\frac{1}{4}$. The ant moves $3$ times and doesn't reach an anthill during this time. On average, how many additional moves will the ant need to reach an anthill? (Compute the expected number of additional moves needed.)
