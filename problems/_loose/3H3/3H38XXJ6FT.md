---
tag: 3H38XXJ6FT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=174913
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a triangle with a perimeter of $2s$, the radius $\varrho$ of its inscribed circle, and one of its angles $\alpha$. Someone constructs the triangle as follows: from the vertex of an angle of size $\alpha$, the segments extending to the points of tangency of a circle of radius $\varrho$ with the sides are of length $s_{1}$. The arc that subtends a segment $BC = s - s_{1}$ at an angle $\alpha$ is completed to a full circle, and a smaller arc of this circle is drawn around the midpoint $D$ of the arc $\widehat{BC}$, which is intersected by a line parallel to $BC$ and at a distance $\varrho$ from it. The line connecting one of the intersection points with $D$ intersects the circle at the vertex $A$ of the sought triangle $ABC$.

Is this construction correct? (We assume that the arc intersects the line parallel to $BC$.)
