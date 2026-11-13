---
tag: 8CBA6KZ3QM
kind: problem
appearances:
  - at: pumac/2022/fb1
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2022 official paper
    url: https://pumac.princeton.edu/s/Indiv_Finals_B_2022_.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2022 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h3152728
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73354
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=263275
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a, b, c, d$ be real numbers for which $a^2 + b^2 + c^2 + d^2 = 1$ . Show the following inequality: $$ a^2 + b^2 - c^2 - d^2 \le \sqrt{2 + 4(ac + bd)}. $$
