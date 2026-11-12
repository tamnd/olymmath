---
tag: MPQ19MA8P2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1953 Moscow Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h1892281
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=56744
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=26387
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-moscow/1953
    source: hf-ai-mo-aops
    label: 1953 Moscow Mathematical Olympiad
---
Let $x_0 = 10^9$ , $x_n = \frac{x^2_{n-1}+2}{2x_{n-1}}$ for $n > 0$ . Prove that $0 < x_{36} - \sqrt2 < 10^{-9}$ .
