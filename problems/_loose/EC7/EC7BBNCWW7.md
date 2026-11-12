---
tag: EC7BBNCWW7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2008 JBMO Shortlist
    url: https://artofproblemsolving.com/community/c6h1528898
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=25976
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numina-olympiads
    url: https://huggingface.co/datasets/project-numina/olympiads
    capture: hf-numina-olympiads/default/train/0000.parquet#row=11116
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=339
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: jbmo-sl/2008
    source: hf-ai-mo-aops
    label: 2008 JBMO Shortlist
  - at: jbmo-sl/2008
    source: hf-numina-olympiads
    label: JBMO-SL
---
Let $p$ be a prime number. Find all positive integers $a$ and $b$ such that: $\frac{4a + p}{b}+\frac{4b + p}{a}$ and $ \frac{a^2}{b}+\frac{b^2}{a}$ are integers.
