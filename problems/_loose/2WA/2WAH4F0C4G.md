---
tag: 2WAH4F0C4G
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2016 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h1219314
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=14532
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2016
    source: hf-ai-mo-aops
    label: 2016 Online Math Open Problems
---
$S$ be the set of all $2017^2$ lattice points $(x,y)$ with $x,y\in \{0\}\cup\{2^{0},2^{1},\cdots,2^{2015}\}$ . A subset $X\subseteq S$ is called BQ if it has the following properties:

(a) $X$ contains at least three points, no three of which are collinear.
(b) One of the points in $X$ is $(0,0)$ .
(c) For any three distinct points $A,B,C \in X$ , the orthocenter of $\triangle ABC$ is in $X$ .
(d) The convex hull of $X$ contains at least one horizontal line segment.

Determine the number of BQ subsets of $S$ .

*Proposed by Vincent Huang*
