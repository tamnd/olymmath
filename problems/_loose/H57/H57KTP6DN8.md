---
tag: H57KTP6DN8
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2018 BMT Spring
    url: https://artofproblemsolving.com/community/c6h1747858
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=70086
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=261021
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
Let $$ h_n := \sum_{k=0}^n \binom{n}{k} \frac{2^{k+1}}{(k+1)}. $$ Find $$ \sum_{n=0}^\infty \frac{h_n}{n!}. $$
