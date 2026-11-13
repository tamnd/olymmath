---
tag: ZNEC10QQJQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2017 Greece Junior Math Olympiad
    url: https://artofproblemsolving.com/community/c6h2031609
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=40407
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=237373
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Greece/train/0000.parquet#row=147
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: gr-hms/2017
    source: hf-ai-mo-aops
    label: 2017 Greece Junior Math Olympiad
  - at: gr-hms
    source: hf-mathnet
    label: Greece 34th Hellenic Mathematical Olympiad
---
Find all triplets $(a,b,p)$ where $a,b$ are positive integers and $p$ is a prime number satisfying: $\frac{1}{p}=\frac{1}{a^2}+\frac{1}{b^2}$
