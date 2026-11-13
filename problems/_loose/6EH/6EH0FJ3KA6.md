---
tag: 6EH0FJ3KA6
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=140630
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In the tetrahedron $A_{1} A_{2} A_{3} A_{4}$, the area of the face opposite vertex $A_{i}$ is denoted as $S_{i}(1 \leqslant i \leqslant 4)$, and the dihedral angle between two faces with areas $S_{k}, S_{j}$ is denoted as $\langle k, j\rangle(1 \leqslant k<j \leqslant 4)$. The midpoint of edge $A_{k} A_{j}$ is denoted as $M_{k j}$, and the triangle containing point $M_{k j}$ and the other two vertices (excluding vertices $A_{k}, A_{j}$) is called a median face (or a face formed by one edge and the midpoint of the opposite edge) of the tetrahedron. The area of this median face is denoted as $S_{k j}(1 \leqslant k<j \leqslant 4)$. Then,
$S_{k j}^{2}=\frac{1}{4}\left(S_{k}^{2}+S_{j}^{2}+2 S_{k} \cdot S_{j} \cdot \cos \langle k, j\rangle\right)$, where $k, j$ satisfy $1 \leqslant k<j \leqslant 4$.
