---
tag: PTGYHTPV93
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 Iran MO (3rd Round)
    url: https://artofproblemsolving.com/community/c6h3139250
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44463
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240737
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
Given $12$ complex numbers $z_1,...,z_{12}$ st for each $1 \leq i \leq 12$ : $$ |z_i|=2 , |z_i - z_{i+1}| \geq 1 $$ prove that : $$ \sum_{1 \leq i \leq 12} \frac{1}{|z_i\overline{z_{i+1}}+1|^2} \geq \frac{1}{2} $$
