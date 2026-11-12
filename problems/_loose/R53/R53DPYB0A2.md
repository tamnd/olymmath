---
tag: R53DPYB0A2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1978 All Soviet Union Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h1869917
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=55288
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=25453
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian/1978
    source: hf-ai-mo-aops
    label: 1978 All Soviet Union Mathematical Olympiad
---
Let $f(x) = x^2 - x + 1$ . Prove that for every natural $m>1$ the numbers $$ m, f(m), f(f(m)), ... $$ are relatively prime.
