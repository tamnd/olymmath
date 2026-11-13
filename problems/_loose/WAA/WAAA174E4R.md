---
tag: WAAA174E4R
kind: problem
type: answer
answer: "6"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=100029
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(22 points) Suppose a set of planar points $S$ has the properties: (i) no three points are collinear; (ii) the distances between any two points are all different. For two points $A$ and $B$ in $S$, if there exists $C \in S$ such that $|A C|<|A B|<|B C|$, then $A B$ is called a middle edge of $S$. For three points $A$, $B$, and $C$ in $S$, if $A B$, $A C$, and $B C$ are all middle edges of $S$, then $\triangle A B C$ is called a middle edge triangle of $S$. Find the smallest $n$ such that any $n$-element planar point set $S$ with properties (i) and (ii) must contain a middle edge triangle.
