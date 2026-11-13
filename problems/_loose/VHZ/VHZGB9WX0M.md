---
tag: VHZGB9WX0M
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2011 Morocco National Olympiad
    url: https://artofproblemsolving.com/community/c6h404592
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=6850
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=208979
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Ukraine/train/0000.parquet#row=150
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ma-mo/2011
    source: hf-ai-mo-aops
    label: 2011 Morocco National Olympiad
---
Let $a$ and $b$ be two positive real numbers such that $a+b=ab$ .
Prove that $\frac{a}{b^{2}+4}+\frac{b}{a^{2}+4}\geq \frac{1}{2}$ .
