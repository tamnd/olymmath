---
tag: ASGDHC7ES7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=221934
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Saudi_Arabia/train/0001.parquet#row=174
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: sa-samc
    source: hf-mathnet
    label: Saudi Arabia Saudi Arabian Mathematical Competitions
---
Let $ABC$ be an acute triangle with $AB < AC$ and inscribed in the circle $(O)$. Denote $I$ as the incenter of $ABC$ and $D$, $E$ as the intersections of $AI$ with $BC$, $(O)$ respectively. Take a point $K$ on $BC$ such that $\angle AIK = 90^o$ and $KA$, $KE$ meet $(O)$ again at M,N respectively. The rays $ND$, $NI$ meet the circle $(O)$ at $Q$,$P$.
1. Prove that the quadrilateral $MPQE$ is a kite.
2. Take $J$ on $IO$ such that $AK \perp AJ$. The line through $I$ and perpendicular to $OI$ cuts $BC$ at $R$ ,cuts $EK$ at $S$ .Prove that $OR \parallel JS$.
