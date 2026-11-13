---
tag: MZMNVE4QVZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=251061
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Saudi_Arabia/train/0000.parquet#row=451
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
Let $ABC$ be a triangle inscribed in circle $(O)$, with its altitudes $BH_b, CH_c$ intersect at orthocenter $H$ ($H_b \in AC$, $H_c \in AB$). $H_bH_c$ meets $BC$ at $P$. Let $N$ be the midpoint of $AH, L$ be the orthogonal projection of $O$ on the symmedian with respect to angle $A$ of triangle $ABC$. Prove that $\angle NLP = 90^o$.
