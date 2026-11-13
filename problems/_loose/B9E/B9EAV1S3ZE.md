---
tag: B9EAV1S3ZE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=166764
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For a regular $n$-sided polygon with side length $a$, the radius of its circumscribed circle is $R$, and the radius of its inscribed circle is $r$. We draw a circle $k$ with radius $\varrho$ around the center of the polygon, such that

$$
R-\frac{a}{2} \leq \varrho \leq r
$$

Furthermore, around each vertex of the polygon, we draw circles that are externally tangent to $k$. The area covered by the circle $k$ and the $n$ tangent circles partially covers the polygon. Construct the circle $k$ such that the covered area is a) the largest possible; b) the smallest possible.
