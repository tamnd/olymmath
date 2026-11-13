---
tag: 31RCNRNNFV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2025 New Zealand MO
    url: https://artofproblemsolving.com/community/c6h3705157
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=49208
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/New_Zealand/train/0000.parquet#row=75
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: nz-nzmo/2025
    source: hf-ai-mo-aops
    label: 2025 New Zealand MO
  - at: nz-nzmo
    source: hf-mathnet
    label: New Zealand NZMO Round Two
---
Let $ABC$ be an acute scalene triangle with $AC > BC > AB$ . Let the orthocentre be H and circumcentre be $O$ . Suppose that lines $BO$ and $CH$ intersect at a point $D$ . Point $E$ (where $E \ne C$ ) lies on side $AC$ so that $OECD$ is cyclic. Point $F$ (where $F \ne C$ ) lies on side $BC$ such that $CE = FE$ . Prove that $BHDF$ is cyclic. (The orthocentre of a triangle is the point of intersection of its altitudes.)
