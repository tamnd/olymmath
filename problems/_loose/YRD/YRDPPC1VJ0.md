---
tag: YRDPPC1VJ0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=121465
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Divide a circle into $n$ equal parts, and write numbers $x_{1}, x_{2}, \cdots, x_{n}$ at each division point, all of which are either +1 or -1. If the circle is rotated by an angle of $k \frac{360^{\circ}}{n}$, then each division point will move to the original position of another division point. Multiply the numbers written at each pair of such division points, and then sum the $n$ products obtained. It is known that when $k=1,2, \cdots, n-1$, the sum is zero. Prove that $n$ is a perfect square.
