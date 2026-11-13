---
tag: 2S00CNVBER
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=167981
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the tetrahedron $A B C D = H$. Prove that there exists a sphere $G$ that touches all four faces of $H$ from the inside. - Show that the point of tangency of $G$ on the face $A B C$ can be obtained as follows: rotate the vertex $D$ around the edge $B C$ into the plane $A B C$, to the side of $B C$ where $A$ is, the resulting point is $D_{a}$. Similarly, construct the points $D_{b}$ and $D_{c}$ by rotating $D$ around $C A$ and $A B$ into the plane $A B C$. Finally, take the center of the circumcircle of the triangle $D_{a} D_{b} D_{c}$, which is the desired point of tangency.
