---
tag: 7RYAMAQAXC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=125892
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $A$ and $B$ be two point sets on a plane, satisfying $A \cap B=\varnothing,|A|=|B|=n$, and no three points are collinear. Connect several line segments between sets $A$ and $B$, with each line segment having one endpoint in set $A$ and the other in set $B$, and at most one line segment between any two points. Let the set of all line segments be $S$. If set $S$ satisfies that for any point in set $A$ or $B$, at least $l$ line segments are connected, then set $S$ is called "$l$-good". Determine the maximum value of $|S|$, such that removing any line segment, set $S$ is no longer $l$-good.
