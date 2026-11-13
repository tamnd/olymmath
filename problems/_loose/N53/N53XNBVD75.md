---
tag: N53XNBVD75
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2024 Iran MO (3rd Round)
    url: https://artofproblemsolving.com/community/c6h3387890
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44478
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Iran/train/0000.parquet#row=386
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo/2024
    source: hf-ai-mo-aops
    label: 2024 Iran MO (3rd Round)
  - at: ir-mo
    source: hf-mathnet
    label: Iran Iranian Mathematical Olympiad
---
Let $ABC$ be a triangle with altitudes $AD, BE, CF$ and orthocenter $H$ . The perpendicular bisector of $HD$ meets $EF$ at $P$ and $N$ is the center of the nine-point circle. Let $L$ be a point on the circumcircle of $ABC$ such that $\angle PLN=90^{\circ}$ and $A, L$ are in distinct sides of the line $PN$ . Show that $ANDL$ is cyclic.
