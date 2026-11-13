---
tag: X4CMZT4W1P
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2021 Iran MO (3rd Round)
    url: https://artofproblemsolving.com/community/c6h2679850
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44428
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240702
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Iran/train/0000.parquet#row=290
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo/2021
    source: hf-ai-mo-aops
    label: 2021 Iran MO (3rd Round)
  - at: ir-mo
    source: hf-mathnet
    label: Iran Iranian Mathematical Olympiad
---
Find all functions $f:\mathbb{N} \to \mathbb{N}$ such that for any two positive integers $a$ and $b$ we have $$ f^a(b) + f^b(a) \mid 2(f(ab) +b^2 -1) $$ Where $f^n(m)$ is defined in the standard iterative manner.
