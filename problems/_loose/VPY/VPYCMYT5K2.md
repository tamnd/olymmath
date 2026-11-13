---
tag: VPYCMYT5K2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=187257
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Ibero-American_Mathematical_Olympiad/train/0000.parquet#row=10
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ibero
    source: hf-mathnet
    label: Ibero-American Mathematical Olympiad Iberoamerican Mathematical Olympiad
---
$\mathrm{ABCD}$ is a convex quadrilateral. $\mathrm{P}, \mathrm{Q}$ are points on the sides $\mathrm{AD}, \mathrm{BC}$ respectively such that $\mathrm{AP} / \mathrm{PD}=\mathrm{BQ} / \mathrm{QC}=\mathrm{AB} / \mathrm{CD}$. Show that the angle between the lines $\mathrm{PQ}$ and $\mathrm{AB}$ equals the angle between the lines $\mathrm{PQ}$ and $\mathrm{CD}$.
