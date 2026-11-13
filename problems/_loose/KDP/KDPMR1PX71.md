---
tag: KDPMR1PX71
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 Iran MO (3rd Round)
    url: https://artofproblemsolving.com/community/c6h3135538
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44452
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240726
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo/2023
    source: hf-ai-mo-aops
    label: 2023 Iran MO (3rd Round)
---
Does there exist bijections $f,g$ from positive integers to themselves st: $$ g(n)=\frac{f(1)+f(2)+ \cdot \cdot \cdot +f(n)}{n} $$ holds for any $n$ ?
