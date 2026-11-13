---
tag: 4B3DJ0EJZ8
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2024 New Zealand MO
    url: https://artofproblemsolving.com/community/c6h3503898
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=49186
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/New_Zealand/train/0000.parquet#row=66
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: nz-nzmo/2024
    source: hf-ai-mo-aops
    label: 2024 New Zealand MO
  - at: nz-nzmo
    source: hf-mathnet
    label: New Zealand NZMO Round Two
---
Determine all positive integers $n$ less than $2024$ such that for all positive integers $x$ , the greatest common divisor of $9x + 1$ and $nx+1$ is $1$ .
