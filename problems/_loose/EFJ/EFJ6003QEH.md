---
tag: EFJ6003QEH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2021 New Zealand MO
    url: https://artofproblemsolving.com/community/c6h2687726
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=49154
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=154022
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/New_Zealand/train/0000.parquet#row=31
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: nz-nzmo/2021
    source: hf-ai-mo-aops
    label: 2021 New Zealand MO
  - at: nz-nzmo
    source: hf-mathnet
    label: New Zealand NZMO Round Two
---
Let $AB$ be a chord of circle $\Gamma$ . Let $O$ be the centre of a circle which is tangent to $AB$ at $C$ and internally tangent to $\Gamma$ at $P$ . Point $C$ lies between $A$ and $B$ . Let the circumcircle of triangle $POC$ intersect $\Gamma$ at distinct points $P$ and $Q$ . Prove that $\angle{AQP}=\angle{CQB}$ .
