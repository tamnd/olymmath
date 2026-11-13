---
tag: 3VEBCKADXH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=238745
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/India/train/0000.parquet#row=249
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $ABC$ be a triangle with circumcentre $O$ and centroid $G$. Let $M$ be the midpoint of $BC$ and $N$ the reflection of $M$ across $O$. Prove that $NO = NA$ if and only if $\angle AOG = 90^{\circ}$.

*Proposed by Pranjal Srivastava*
