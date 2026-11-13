---
tag: 83WRVEPEMK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2018 BMT Spring
    url: https://artofproblemsolving.com/community/c6h2751897
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=70105
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=261040
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
Find $$ \sum^{k=672}_{k=0} { 2018\choose {3k+2}} \, (mod 3) $$
