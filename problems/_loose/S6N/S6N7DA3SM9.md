---
tag: S6N7DA3SM9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1999 IberoAmerican
    url: https://artofproblemsolving.com/community/c6h83884
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=22987
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ibero/1999
    source: hf-ai-mo-aops
    label: 1999 IberoAmerican
---
Let $A$ and $B$ points in the plane and $C$ a point in the perpendiclar bisector of $AB$ . It is constructed a sequence of points $C_1,C_2,\dots, C_n,\dots$ in the following way: $C_1=C$ and for $n\geq1$ , if $C_n$ does not belongs to $AB$ , then $C_{n+1}$ is the circumcentre of the triangle $\triangle{ABC_n}$ .

Find all the points $C$ such that the sequence $C_1,C_2,\dots$ is defined for all $n$ and turns eventually periodic.

Note: A sequence $C_1,C_2, \dots$ is called eventually periodic if there exist positive integers $k$ and $p$ such that $C_{n+p}=c_n$ for all $n\geq{k}$ .
