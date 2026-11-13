---
tag: DXVB6K6A4A
kind: problem
appearances:
  - at: pumac/2025/ga8
    primary: true
canonical:
  statement: S1
  rule: official-original
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2025 official paper
    url: https://pumac.princeton.edu/s/PUMaC_2025_Geometry_A.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
    extraction: native/pdftotext@26.10.0 (claude-opus-5-5)
    confidence: 0.95
status:
  statement: captured
---
Connor is standing on an infinite, flat ground plane at $z=0$. The ground is perfectly solid everywhere except for a circular hole of radius $1$ centered at the origin, i.e., the set $x^2+y^2\le 1$ is missing from the plane. He holds a cube of side length $1000$ starting entirely above the ground in the half-space $z>0$. He may translate and rotate the cube in any way he likes, subject to the constraint that no part of the cube ever passes through the solid portion of the ground plane; it may only pass through the circular hole.

Let $S$ be the set of all points with $z<0$ that can coincide with a vertex of the cube during such motions. Find the volume of $S$.
