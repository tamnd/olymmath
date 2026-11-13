---
tag: SXB1M3MCMF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2022 BMT
    url: https://artofproblemsolving.com/community/c6h3133238
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=70430
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=261366
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: bmt/2022
    source: hf-ai-mo-aops
    label: 2022 BMT
---
Let $ABCD$ be a unit square. Points $E$ and $F$ are chosen on line segments $\overline{BC}$ and $\overline{CD}$ , respectively, such that the area of $ABEF D$ is three times the area of triangle $\vartriangle ECF$ . Compute the maximum possible area of triangle $\vartriangle AEF$ .
