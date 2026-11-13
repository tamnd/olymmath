---
tag: E4TKCKV0NB
kind: problem
type: answer
answer: minimum = 2n(k+m) − 1; maximum = 2n(k+m)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Greece/train/0000.parquet#row=83
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In the plane there are given $n$ different circles with the same center. In the interior of the circle with the smaller radius we consider two different points $A$ and $B$. Next we consider $k$ different lines passing from point $A$ and $m$ different lines passing from point $B$. All lines passing from $A$ intersect all lines passing from $B$ (there is no line passing from $A$ and $B$) and their points of intersection are not on the given circles. Determine the maximal and the minimal number of regions bounded by the lines and the circles, lying in the interior of the circles and for the regions lying into the smaller circle at least one part of their border is an arch of the circle.
