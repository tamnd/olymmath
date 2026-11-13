---
tag: RS7156KDRJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=204904
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Turkey/train/0000.parquet#row=309
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The points $ A,B,K,L,X$ lies of the circle $\Gamma$ in that order such that the arcs $\widehat{BK}$ and $\widehat{KL}$ are equal. The circle that passes through $A$ and tangent to $BK$ at $B$ intersects the line segment $KX$ at $P$ and $Q$. The circle that passes through $A$ and tangent to $BL$ at $B$ intersect the line segment $BX$ for the second time at $T$. Prove that $\angle{PTB} = \angle{XTQ}$
