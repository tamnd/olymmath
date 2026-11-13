---
tag: 3R01DKXWE1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2012 Federal Competition For Advanced Students, Part 2
    url: https://artofproblemsolving.com/community/c6h483099
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=7880
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=209964
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Austria/train/0000.parquet#row=40
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: at-oemo/2012
    source: hf-ai-mo-aops
    label: 2012 Federal Competition For Advanced Students, Part 2
  - at: at-oemo
    source: hf-mathnet
    label: Austria Austrian Mathematical Olympiad
---
Solve over $\mathbb{Z}$ :
$$ x^4y^3(y-x)=x^3y^4-216 $$
