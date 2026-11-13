---
tag: NJZD0AKS29
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: Russian TST 2015
    url: https://artofproblemsolving.com/community/c6h3057470
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=57156
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=249975
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-tst/2015
    source: hf-ai-mo-aops
    label: Russian TST 2015
---
Let $n>4$ be a natural number. Prove that $$\sum_{k=2}^n\sqrt[k]{\frac{k}{k-1}}<n.$$
