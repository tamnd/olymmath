---
tag: AA6GFG9WTN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2024 Vietnam National Olympiad
    url: https://artofproblemsolving.com/community/c6h3227991
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=2305
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=268169
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Vietnam/train/0000.parquet#row=250
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: vn-vmo/2024
    source: hf-ai-mo-aops
    label: 2024 Vietnam National Olympiad
  - at: vn-vmo
    source: hf-mathnet
    label: Vietnam Vietnamese MO
---
Find all polynomials $P(x), Q(x)$ with real coefficients such that for all real numbers $a$ , $P(a)$ is a root of the equation $x^{2023}+Q(a)x^2+(a^{2024}+a)x+a^3+2025a=0.$
