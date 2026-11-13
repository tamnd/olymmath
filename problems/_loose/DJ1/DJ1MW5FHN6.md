---
tag: DJ1MW5FHN6
kind: problem
type: answer
answer: \frac{2m}{3} + \frac{2(n-m)}{3} = \frac{2n}{3}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=219548
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
It is considered a regular polygon with $n$ sides, where $n(n>3)$ is an odd number that does not divide by 3. From the vertices of the polygon are arbitrarily chosen $m(0\leq m\leq n)$ vertices that are colored in red and the others in black. A triangle with the vertices at the vertices of the polygon it is considered $monocolor$ ,if all of its vertices are of the same color. Prove that the number of all $monocolor$ isosceles triangles with the vertices at the given polygon ends does not depend on the way of coloring of the vertices of the polygon. Determine the number of all these $monocolor$ isosceles triangles.
