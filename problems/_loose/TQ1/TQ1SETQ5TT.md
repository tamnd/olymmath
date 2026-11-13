---
tag: TQ1SETQ5TT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2014 Iran MO (2nd Round)
    url: https://artofproblemsolving.com/community/c6h588025
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=11314
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=213258
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Iran/train/0000.parquet#row=96
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo-r2/2014
    source: hf-ai-mo-aops
    label: 2014 Iran MO (2nd Round)
  - at: ir-mo
    source: hf-mathnet
    label: Iran Iranian Mathematical Olympiad
---
A subset $S$ of positive real numbers is called *powerful* if for any two distinct elements $a, b$ of $S$ , at least one of $a^{b}$ or $b^{a}$ is also an element of $S$ . **a)** Give an example of a four elements powerful set.**b)** Prove that every finite powerful set has at most four elements.
