---
tag: RQMT6Q6R8Y
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=253684
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $ABC$ be any triangle with $\angle BAC \le \angle ACB \le \angle CBA$. Let $D, E$ and $F$ be the midpoints of $BC, CA$ and $AB$, respectively, and let $\epsilon$ be a positive real number. Suppose there is an ant (represented by a point $T$ ) and two spiders (represented by points $P_1$ and $P_2$, respectively) walking on the sides $BC, CA, AB, EF, FD$ and $DE$. The ant and the spiders may vary their speeds, turn at an intersection point, stand still, or turn back at any point; moreover, they are aware of their and the others' positions at all time.
Assume that the ant's speed does not exceed $1$ mm/s, the first spider's speed does not exceed $\frac{\sin A}{2 \sin A+\sin B}$ mm/s, and the second spider's speed does not exceed $\epsilon$ mm/s. Show that the spiders always have a strategy to catch the ant regardless of the starting points of the ant and the spiders.

Note: the two spiders can discuss a plan before the hunt starts and after seeing all three starting points, but cannot communicate during the hunt.
