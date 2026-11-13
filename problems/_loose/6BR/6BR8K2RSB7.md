---
tag: 6BR8K2RSB7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=161487
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The lock pattern for Kiki's phone is formed in the following way. On a $3 \times 3$ grid of points, a path composed of several line segments must be drawn, where each segment connects two of the observed points, and the starting point of the next segment is always the endpoint of the previous one. During the drawing of the path, each time the path passes through a point (whether as an internal or endpoint of a segment), that point can no longer be used as the endpoint of any subsequent segment (with the exception that the starting point of the next segment is always the endpoint of the previous one), but it is allowed for such a point to be an internal point of subsequent segments. Kiki wants her phone's lock pattern to satisfy the following conditions:

$1^{\circ}$ all 9 points must lie on the drawn path;

$2^{\circ}$ the trace left by the path must be axisymmetric (by trace, we mean the union of the segments as geometric objects, i.e., without information about their order, direction of movement, and any possible overlap of different segments);

$3^{\circ}$ on the trace of the path, there are exactly two points (out of the 9 observed) that are connected to only one other point.

Can Kiki set such a lock pattern on her phone? If so, how many patterns can she choose from (up to rotation and/or reflection)?
