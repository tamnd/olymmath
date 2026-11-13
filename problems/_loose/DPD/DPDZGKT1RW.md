---
tag: DPDZGKT1RW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2018 Romania National Olympiad
    url: https://artofproblemsolving.com/community/c6h3392460
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=16940
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=178091
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0002.parquet#row=250
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-nmo/2018
    source: hf-ai-mo-aops
    label: 2018 Romania National Olympiad
  - at: ro-nmo
    source: hf-mathnet
    label: Romania 69th Romanian Mathematical Olympiad - Final Round
---
Find the natural number $n$ for which $$ \sqrt{\frac{20^n- 18^n}{19}} $$ is a rational number.
