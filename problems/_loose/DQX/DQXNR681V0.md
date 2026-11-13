---
tag: DQXNR681V0
kind: problem
type: answer
answer: \frac{8\sqrt{2}}{3} \cdot \sqrt{1-t^2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=212480
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In the coordinate space, define a square $S$, defined by the inequality $|x|\leq 1,\ |y|\leq 1$ on the $xy$-plane, with four vertices $A(-1,\ 1,\ 0),\ B(1,\ 1,\ 0),\ C(1,-1,\ 0), D(-1,-1,\ 0)$. Let $V_1$ be the solid by a rotation of the square $S$ about the line $BD$ as the axis of rotation, and let $V_2$ be the solid by a rotation of the square $S$ about the line $AC$ as the axis of rotation.

(1) For a real number $t$ such that $0\leq t<1$, find the area of cross section of $V_1$ cut by the plane $x=t$.

(2) Find the volume of the common part of $V_1$ and $V_2$.
