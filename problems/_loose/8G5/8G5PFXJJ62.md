---
tag: 8G5PFXJJ62
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=261646
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Gus is an inhabitant on an $11$ by $11$ grid of squares. He can walk from one square to an adjacent square (vertically or horizontally) in $1$ unit of time. There are also two vents on the grid, one at the top left and one at the bottom right. If Gus is at one vent, he can teleport to the other vent in $0.5$ units of time. Let an ordered pair of squares $(a,b)$ on the grid be *sus * if the fastest path from $a$ to $b$ requires Gus to teleport between vents. Walking on top of a vent does not count as teleporting between vents.
What is the total number of ordered pairs of squares that are *sus*?
Note that the pairs $(a_1,b_1)$ and $(a_2,b_2)$ are considered distinct if and only if $a_1 \ne a_2$ or $b_1 \ne b_2$.
