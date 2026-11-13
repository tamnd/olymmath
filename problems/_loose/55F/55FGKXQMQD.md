---
tag: 55FGKXQMQD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=250857
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Saudi_Arabia/train/0000.parquet#row=442
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: sa-samc
    source: hf-mathnet
    label: Saudi Arabia SAUDI ARABIAN MATHEMATICAL COMPETITIONS
---
Let $ABC$ be an acute, non isosceles triangle and $(O)$ be its circumcircle (with center $O$). Denote by $G$ the centroid of the triangle $ABC$, by $H$ the foot of the altitude from $A$ onto the side $BC$ and by $I$ the midpoint of $AH$. The line $IG$ intersects $BC$ at $K$.
1. Prove that $CK = BH$.
2. The ray $(GH$ intersects $(O)$ at L. Denote by $T$ the circumcenter of the triangle $BHL$. Prove that $AO$ and $BT$ intersect on the circle $(O)$.
