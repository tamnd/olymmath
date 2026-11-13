---
tag: TXQ43XMWZM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=204536
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0003.parquet#row=126
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $ABC$ be an acute-angled triangle with $BC > AB$, such that the points $A$, $H$, $I$ and $C$ are concyclic (where $H$ is the orthocenter and $I$ is the incenter of triangle $ABC$). The line $AC$ intersects the circumcircle of triangle $BHC$ at point $T$, and the line $BC$ intersects the circumcircle of triangle $AHC$ at point $P$. If the lines $PT$ and $HI$ are parallel, determine the measures of the angles of triangle $ABC$.
