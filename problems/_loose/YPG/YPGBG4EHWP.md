---
tag: YPGBG4EHWP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=35341
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Angle Research. Let $x_{1}, x_{2}, \ldots, x_{n}$ be positive numbers. Choose a ray $O X$ on the plane, and cut off $O P_{1}=x_{1}$ on it, then perpendicular to $O P_{1}$ cut off $P_{1} P_{2}=x_{2}$, then perpendicular to $O P_{2}$ cut off $P_{2} P_{3}=x_{3}$, and so on up to $P_{n-1} P_{n}=x_{n}$. In this process, the right angles are oriented such that their left sides pass through point $O$. We can consider that the ray $O X$ rotates around point $O$ (from its initial position, passing through points $P_{1}$, $P_{2}, \ldots$) to its final position $O P_{n}$, describing a certain angle.

Prove that for given numbers $x_{i}$, this angle will be the smallest if they are numbered in descending order, $x_{1} \geqslant x_{2} \geqslant \ldots \geqslant x_{n}$, and will be the largest if they are numbered in ascending order.
