---
tag: WREM34A19E
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=221980
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Saudi_Arabia/train/0001.parquet#row=140
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
Let $ABC$ be a triangle with $AB < AC$ inscribed in $(O)$. Tangent line at $A$ of $(O)$ cuts $BC$ at $D$. Take $H$ as the projection of $A$ on $OD$ and $E,F$ as projections of $H$ on $AB,AC$.Suppose that $EF$ cuts $(O)$ at $R,S$. Prove that $(HRS)$ is tangent to $OD$
