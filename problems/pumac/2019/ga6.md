---
tag: H103NZCV1T
kind: problem
appearances:
  - at: pumac/2019/ga6
    primary: true
  - at: pumac/2019/gb7
canonical:
  statement: S1
  rule: official-original
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2019 official paper
    url: https://pumac.princeton.edu/s/2019Geometry_A.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
    extraction: native/pdftotext@26.10.0 (claude-opus-5-5)
    confidence: 0.95
status:
  statement: captured
---
Let two ants stand on the perimeter of a regular $2019$-gon of unit side length. One of them stands on a vertex and the other one is on the midpoint of the opposite side. They start walking along the perimeter at the same speed counterclockwise. The locus of their midpoints traces out a figure $P$ in the plane with $N$ corners. Let the area enclosed by convex hull of $P$ be $\frac{A}{B}\cdot\frac{\sin^m\left(\frac{\pi}{4038}\right)}{\tan\left(\frac{\pi}{2019}\right)}$, where $A$ and $B$ are coprime positive integers, and $m$ is the smallest possible positive integer such that this formula holds. Find $A+B+m+N$.

*Note:* The *convex hull* of a figure $P$ is the convex polygon of smallest area which contains $P$.
