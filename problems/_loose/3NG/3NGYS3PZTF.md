---
tag: 3NGYS3PZTF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1986 All Soviet Union Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h1890557
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=55466
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=25614
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian/1986
    source: hf-ai-mo-aops
    label: 1986 All Soviet Union Mathematical Olympiad
---
Prove that for every natural $n$ the following inequality is valid $$ |\sin 1| + |\sin 2| + |\sin (3n-1)| + |\sin 3n| > \frac{8n}{5} $$
