---
tag: V8P2EF46MG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=254707
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
$4026$ points were noted on the plane, not three of which lie on a straight line.
The $2013$ points are the vertices of a convex polygon, and the other $2013$ vertices are inside this polygon. It is allowed to paint each point in one of two colors. Coloring will be good if some pairs of dots can be combined segments with the following conditions:
$\bullet$ Each segment connects dots of the same color.
$\bullet$ No two drawn segments intersect at their inner points.
$\bullet$ For an arbitrary pair of dots of the same color, there is a path along the lines from one point to another.
Please note that the sides of the convex $2013$ rectangle are not automatically drawn segments, although some (or all) can be drawn as needed. Prove that the total number of good colors does not depend on the specific locations of the points and find that number.
