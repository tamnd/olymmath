---
tag: Z2EBMDVXAT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2009 Switzerland - Final Round
    url: https://artofproblemsolving.com/community/c6h2984890
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=60521
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=85355
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numina-olympiads
    url: https://huggingface.co/datasets/project-numina/olympiads
    capture: hf-numina-olympiads/default/train/0000.parquet#row=1479
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ch-smo/2009
    source: hf-ai-mo-aops
    label: 2009 Switzerland - Final Round
---
Let $a, b, c, d$ be positive real numbers. Prove the following inequality and determine all cases in which the equality holds : $$ \frac{a - b}{b + c}+\frac{b - c}{c + d}+\frac{c - d}{d + a}+\frac{d - a}{a + b} \ge 0. $$
