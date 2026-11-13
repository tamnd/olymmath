---
tag: XDK67MPAR1
kind: problem
type: answer
answer: \frac{6}{\sqrt{33}}[(\frac{7+\sqrt{33}}{2})^{n}-(\frac{7-\sqrt{33}}{2})^{n}]
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=109304
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be a given positive integer, consider the set of points in the Cartesian coordinate system $x O y$
$$
T=\{(x, y)|| x|=| y \mid \leq n, x, y \in \mathbf{Z}\}
$$

For two points $P, Q$ in $T$, $P, Q$ are called "adjacent" if and only if $|P Q|=\sqrt{2}$ or $P Q$ is parallel to one of the coordinate axes. Each point in $T$ is colored with one of three colors: red, blue, or green, such that any two adjacent points are colored differently. Find the number of coloring ways.
