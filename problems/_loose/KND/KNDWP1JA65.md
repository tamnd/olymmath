---
tag: KNDWP1JA65
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 China Girls Math Olympiad
    url: https://artofproblemsolving.com/community/c6h3132847
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=35479
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=233943
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-gmo/2023
    source: hf-ai-mo-aops
    label: 2023 China Girls Math Olympiad
---
Find all pairs $(a,b,c)$ of positive integers such that $$ \frac{a}{2^a}=\frac{b}{2^b}+\frac{c}{2^c} $$
