---
tag: 2KFYB3S8PC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2018 BMT Spring
    url: https://artofproblemsolving.com/community/c6h1743646
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=70078
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=261013
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: bmt/2018
    source: hf-ai-mo-aops
    label: 2018 BMT Spring
---
Let $F_1 = 0$ , $F_2 = 1$ , and $F_n = F_{n-1} + F_{n-2}$ . Compute $$ \sum_{n=1}^\infty \frac{\sum_{n=1}^\infty F_i}{3^n}. $$
