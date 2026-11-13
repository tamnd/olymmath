---
tag: STG21NDWY6
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=251043
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Saudi_Arabia/train/0000.parquet#row=349
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
Let $ABC$ be a non isosceles triangle inscribed in a circle $(O)$ and $BE, CF$ are two angle bisectors intersect at $I$ with $E$ belongs to segment $AC$ and $F$ belongs to segment $AB$. Suppose that $BE, CF$ intersect $(O)$ at $M,N$ respectively. The line $d_1$ passes through $M$ and perpendicular to $BM$ intersects $(O)$ at the second point $P,$ the line $d_2$ passes through $N$ and perpendicular to $CN$ intersect $(O)$ at the second point $Q$. Denote $H, K$ are two midpoints of $MP$ and $NQ$ respectively.
1. Prove that triangles $IEF$ and $OKH$ are similar.
2. Suppose that S is the intersection of two lines $d_1$ and $d_2$. Prove that $SO$ is perpendicular to $EF$.
