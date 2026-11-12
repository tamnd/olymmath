---
tag: CTCWF64HPG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 Kurschak Competition
    url: https://artofproblemsolving.com/community/c6h3171183
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=41378
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: kurschak/2023
    source: hf-ai-mo-aops
    label: 2023 Kurschak Competition
---
Let $n\geq 2$ be a positive integer. We call a *vertex* every point in the coordinate plane, whose $x$ and $y$ coordinates both are from the set $\{1,2,3,...,n\}$ . We call a segment between two vertices an *edge*, if its length if $1$ . We've colored some edges red, such that between any two vertices, there is a unique path of red edges (a path may contain each edge at most once). The red edge $f$ is *vital* for an edge $e$ , if the path of red edges connecting the two endpoints of $e$ contain $f$ . Prove that there is a red edge, such that it is vital for at least $n$ edges.
