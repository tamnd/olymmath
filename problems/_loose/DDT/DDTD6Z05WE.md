---
tag: DDTD6Z05WE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2005 Ukraine National Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h291929
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=63022
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=254609
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Ukraine/train/0000.parquet#row=15
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ua-umo/2005
    source: hf-ai-mo-aops
    label: 2005 Ukraine National Mathematical Olympiad
  - at: ua-umo
    source: hf-mathnet
    label: Ukraine Ukrainian Mathematical Olympiad, Final Round
---
Find all positive integers $ n$ for which $ \cos (\pi \sqrt{n^2+n}) \ge 0.$
