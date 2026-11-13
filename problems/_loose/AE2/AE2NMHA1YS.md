---
tag: AE2NMHA1YS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1998 Harvard-MIT Mathematics Tournament
    url: https://artofproblemsolving.com/community/c6h3268924
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=71198
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=268713
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hmmt/1998
    source: hf-ai-mo-aops
    label: 1998 Harvard-MIT Mathematics Tournament
---
It is not possible to construct a segment of length $\pi$ using a straightedge, compass, and a given segment of length $1$ . The following construction, given in $1685$ by Adam Kochansky, yields a segment whose length agrees with $\pi$ to five decimal places:
Construct a circle of radius $1$ and call its center $O$ . Construct a diameter $AB$ of this circle and a line $\ell$ tangent to the circle at $A$ . Next, draw a circle with radius $1$ centered at $A$ , and call one of the intersections with the original circle $C$ . Now from C draw an arc of radius $1$ intersecting the circle around $A$ at $D$ , where $D$ lies outside of the circle centered at $O$ . Draw $OD$ and let $E$ be its point of intersection with $\ell$ . Construct $H$ on $AE$ such that $A$ is between $H$ and $E$ , and $HE=3$ .
The distance between $B$ and $H$ is then close to $\pi$ ; calculate its exact value.
