---
tag: MVYWC4SJD8
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=212527
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Turkey/train/0000.parquet#row=131
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tr-mo
    source: hf-mathnet
    label: Turkey 21st Turkish Mathematical Olympiad
---
The circle $\omega_1$ with diameter $[AB]$ and the circle $\omega_2$ with center $A$ intersects at points $C$ and $D$. Let $E$ be a point on the circle $\omega_2$, which is outside $\omega_1$ and at the same side as $C$ with respect to the line $AB$. Let the second point of intersection of the line $BE$ with $\omega_2$ be $F$. For a point $K$ on the circle $\omega_1$ which is on the same side as $A$ with respect to the diameter of $\omega_1$ passing through $C$ we have $2\cdot CK \cdot AC = CE \cdot AB$. Let the second point of intersection of the line $KF$ with $\omega_1$ be $L$. Show that the symmetric of the point $D$ with respect to the line $BE$ is on the circumcircle of the triangle $LFC$.
