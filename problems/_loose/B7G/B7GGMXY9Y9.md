---
tag: B7GGMXY9Y9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=188476
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/North_Macedonia/train/0000.parquet#row=69
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: mk-mo
    source: hf-mathnet
    label: North Macedonia Macedonian Mathematical Olympiad
---
Given an acute-angled triangle $ABC$. The point $D$ is the foot of the altitude dropped from $A$ to the side $BC$. The point $E$ lies on the segment $AD$ and it holds that $\frac{\overline{AE}}{\overline{ED}}=\frac{\overline{CD}}{\overline{DB}}$. The point $F$ is the foot of the perpendicular dropped from the point $D$ to the line $BE$. Prove that $\measuredangle AFC=90^{\circ}$.
