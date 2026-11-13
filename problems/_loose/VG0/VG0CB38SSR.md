---
tag: VG0CB38SSR
kind: problem
type: answer
answer: 4 + \sqrt{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=212513
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider three points $P(0,-\sqrt{2}),\ Q(0,\ \sqrt{2}),\ A(a,\ \sqrt{a^2+1})\ (0\leq a\leq 1)$.

(1) Show that the difference of two line segments $PA-AQ$ is constant regardless of $a$, then find the value.

(2) Let $B$ be the point of intersection between the half-line passing through $A$ with the end point $Q$ and the parabola $y=\frac{\sqrt{2}}{8}x^2$, and let $C$ be the point of intersection between the perpendicular line drawn from the point $B$ to the line $y=2$.
Show that the sum of the line segments $PA+AB+BC$ is constant regardless of $a$, then find the value.
