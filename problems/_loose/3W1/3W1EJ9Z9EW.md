---
tag: 3W1EJ9Z9EW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2024 Romanian Master of Mathematics Shortlist
    url: https://artofproblemsolving.com/community/c6h3561072
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=27738
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Fix an integer $n\geq 3$ and let $A_1A_2\ldots A_n$ be a convex polygon in the plane. Let $\mathcal{M}$ be the set of all midpoints $M_{i,j}$ of segments $A_iA_j$ where $i\neq j$ . Assume that all of these midpoints are distinct, i.e. $\mathcal{M}$ consists of $\frac{n(n-1)}{2}$ elements. Dissect the polygon $M_{1,2}M_{2,3}\ldots M_{n,1}$ into triangles so that the following hold:

(1) The intersection of every two triangles (interior and boundary) is either empty or a common
vertex or a common side.
(2) The vertices of all triangles lie in M (not all points in M are necessarily used).
(3) Each side of every triangle is of the form $M_{i,j}M_{i,k}$ for some pairwise distinct indices $i,j,k$ .

Prove that the total number of triangles in such a dissection is $3n-8$ .
