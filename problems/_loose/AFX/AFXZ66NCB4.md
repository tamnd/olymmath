---
tag: AFXZ66NCB4
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=214397
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/North_Macedonia/train/0000.parquet#row=320
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $H$ be the orthocentre and $G$ be the centroid of acute-angled triangle $ABC$ with $AB\ne AC$. The line $AG$ intersects the circumcircle of $ABC$ at $A$ and $P$. Let $P'$ be the reflection of $P$ in the line $BC$. Prove that $\angle CAB = 60$ if and only if $HG = GP'$
