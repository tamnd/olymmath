---
tag: 5VWBDRNHVJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2021 New Zealand MO
    url: https://artofproblemsolving.com/community/c6h2675707
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=49147
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=153986
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/New_Zealand/train/0000.parquet#row=27
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
    label: New Zealand NZMO Round One
---
Let $ABCD$ be a trapezium such that $AB\parallel CD$ . Let $E$ be the intersection of diagonals $AC$ and $BD$ . Suppose that $AB = BE$ and $AC = DE$ . Prove that the internal angle bisector of $\angle BAC$ is perpendicular to $AD$ .
