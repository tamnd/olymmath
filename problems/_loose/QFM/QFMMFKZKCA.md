---
tag: QFMMFKZKCA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=161179
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given natural numbers $b$ and $n$, Alice and Bob play the following game. In space, there are $n$ points in general position (no three are collinear, no four are coplanar), and each pair is connected by a single line segment. They take turns coloring the uncolored line segments - Alice first colors one segment red, and then Bob colors $b$ segments blue, and so on until there are no uncolored segments left. Alice wins if she creates a red triangle, while Bob wins if the game ends without Alice creating a red triangle.

a) If $b < \sqrt{2n - 2} - \frac{3}{2}$, prove that Alice has a winning strategy.

b) If $b \geq 2 \sqrt{n}$, prove that Bob has a winning strategy.
