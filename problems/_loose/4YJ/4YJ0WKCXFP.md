---
tag: 4YJ0WKCXFP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2021 Romanian Master of Mathematics Shortlist
    url: https://artofproblemsolving.com/community/c6h3158687
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=27712
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Fix a positive integer $n$ and a finite graph with at least one edge; the endpoints of each
edge are distinct, and any two vertices are joined by at most one edge. Vertices and edges are
assigned (not necessarily distinct) numbers in the range from $0$ to $n-1$ , one number each. A
vertex assignment and an edge assignment are *compatible* if the following condition is satisfied
at each vertex $v$ : The number assigned to $v$ is congruent modulo $n$ to the sum of the numbers
assigned to the edges incident to $v$ . Fix a vertex assignment and let $N$ be the total number
of compatible edge assignments; compatibility refers, of course, to the fixed vertex assignment.
Prove that, if $N \neq 0$ , then the prime divisors of $N$ are all at most $n$ .
