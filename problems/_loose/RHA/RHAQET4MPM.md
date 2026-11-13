---
tag: RHAQET4MPM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2021 Argentina National Olympiad
    url: https://artofproblemsolving.com/community/c6h2830137
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=29847
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=229567
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ar-oma/2021
    source: hf-ai-mo-aops
    label: 2021 Argentina National Olympiad
---
Milly chooses a positive integer $n$ and then Uriel colors each integer between $1$ and $n$ inclusive red or blue. Then Milly chooses four numbers $a, b, c, d$ of the same color (there may be repeated numbers). If $a+b+c= d$ then Milly wins. Determine the smallest $n$ Milly can choose to ensure victory, no matter how Uriel colors.
