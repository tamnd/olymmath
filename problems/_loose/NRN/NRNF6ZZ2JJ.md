---
tag: NRNF6ZZ2JJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2015 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h1164292
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=78554
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2015
    source: hf-ai-mo-aops
    label: 2015 Online Math Open Problems
---
Define $\left\lVert A-B \right\rVert = (x_A-x_B)^2+(y_A-y_B)^2$ for every two points $A = (x_A, y_A)$ and $B = (x_B, y_B)$ in the plane.
Let $S$ be the set of points $(x,y)$ in the plane for which $x,y \in \left\{ 0,1,\dots,100 \right\}$ .
Find the number of functions $f : S \to S$ such that $\left\lVert A-B \right\rVert \equiv \left\lVert f(A)-f(B) \right\rVert \pmod{101}$ for any $A, B \in S$ .

*Proposed by Victor Wang*
