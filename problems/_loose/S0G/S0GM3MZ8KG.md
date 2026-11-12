---
tag: S0GM3MZ8KG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2003 Brazil National Olympiad
    url: https://artofproblemsolving.com/community/c6h58847
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=32390
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: br-obm/2003
    source: hf-ai-mo-aops
    label: 2003 Brazil National Olympiad
---
A graph $G$ with $n$ vertices is called *cool* if we can label each vertex with a different positive integer not greater than $\frac{n^2}{4}$ and find a set of non-negative integers $D$ so that there is an edge between two vertices iff the difference between their labels is in $D$ . Show that if $n$ is sufficiently large we can always find a graph with $n$ vertices which is not cool.
