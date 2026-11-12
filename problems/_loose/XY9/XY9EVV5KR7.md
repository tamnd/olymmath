---
tag: XY9EVV5KR7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=358
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numina-olympiads
    url: https://huggingface.co/datasets/project-numina/olympiads
    capture: hf-numina-olympiads/default/train/0000.parquet#row=11028
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: jbmo-sl/2003
    source: hf-numina-olympiads
    label: JBMO-SL
---
Let $G$ be the centroid of the the triangle $A B C$. Reflect point $A$ across $C$ at $A^{\prime}$. Prove that $G, B, C, A^{\prime}$ are on the same circle if and only if $G A$ is perpendicular to $G C$.
