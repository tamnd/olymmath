---
tag: 38DXGGMRCH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=250817
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Saudi_Arabia/train/0000.parquet#row=409
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
Let $ABC$ be a triangle inscribed in circle $(O),$ with its altitudes $BE, CF$ intersect at orthocenter $H$ ($E \in AC, F \in AB$). Let $M$ be the midpoint of $BC, K$ be the orthogonal projection of $H$ on $AM$. $EF$ intersects $BC$ at $P$. Let $Q$ be the intersection of tangent of $(O)$ which passes through $A$ with $BC, T$ be the reflection of $Q$ through $P$. Prove that $\angle OKT = 90^o$.
