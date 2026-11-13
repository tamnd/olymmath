---
tag: SMX6CTR15A
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 Bangladesh Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h3013584
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=30890
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=204242
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: bd-bdmo/2023
    source: hf-ai-mo-aops
    label: 2023 Bangladesh Mathematical Olympiad
---
Consider an integrable function $f:\mathbb{R} \rightarrow \mathbb{R}$ such that $af(a)+bf(b)=0$ when $ab=1$ . Find the value of the following integration: $$ \int_{0}^{\infty} f(x) dx $$
