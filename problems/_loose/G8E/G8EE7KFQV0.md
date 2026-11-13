---
tag: G8EE7KFQV0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=236270
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Estonia/train/0000.parquet#row=207
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ee-mo
    source: hf-mathnet
    label: Estonia Estonian Math Competitions
---
Let $O$ be the circumcentre of the acute triangle $ABC$. Let $c_1$ and $c_2$ be the circumcircles of triangles $ABO$ and $ACO$. Let $P$ and $Q$ be points on $c_1$ and $c_2$ respectively, such that OP is a diameter of $c_1$ and $OQ$ is a diameter of $c_2$. Let $T$ be the intesection of the tangent to $c_1$ at $P$ and the tangent to $c_2$ at $Q$. Let $D$ be the second intersection of the line $AC$ and the circle $c_1$. Prove that the points $D, O$ and $T$ are collinear
