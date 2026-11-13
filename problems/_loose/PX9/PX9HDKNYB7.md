---
tag: PX9HDKNYB7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 South Africa National Olympiad
    url: https://artofproblemsolving.com/community/c6h3122550
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=59725
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/South_Africa/train/0000.parquet#row=292
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: za-samo/2023
    source: hf-ai-mo-aops
    label: 2023 South Africa National Olympiad
  - at: za-samo
    source: hf-mathnet
    label: South Africa The South African Mathematical Olympiad Third Round
---
Let $ABIH$ , $BDEC$ and $ACFG$ be arbitrary rectangles constructed (externally) on the sides of triangle $ABC$ .Choose point $S$ outside rectangle $ABIH$ (on the opposite side as triangle $ABC$ ) such that $\angle SHI=\angle FAC$ and $\angle HIS=\angle EBC$ .Prove that the lines $FI,EH$ and $CS$ are concurrent(i.e., the three lines intersect in one point).
