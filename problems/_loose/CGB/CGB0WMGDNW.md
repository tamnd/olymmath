---
tag: CGB0WMGDNW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=87450
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Croatia/train/0001.parquet#row=227
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hr-mo/2018
    source: hf-mathnet
    label: Croatia Croatia_2018
---
Let $ABC$ be an acute-angled triangle such that $|BC| > |AC|$. The perpendicular bisector of segment $\overline{AB}$ intersects side $\overline{BC}$ at point $P$, and line $AC$ at point $Q$. Point $R$ is the foot of the perpendicular from point $P$ to side $\overline{AC}$, and point $S$ is the foot of the perpendicular from point $Q$ to line $BC$.

Prove that line $RS$ bisects segment $\overline{AB}$.
