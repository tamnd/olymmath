---
tag: 69SEDBZVGA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1950 Moscow Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h1890162
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=56664
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=249562
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-moscow/1950
    source: hf-ai-mo-aops
    label: 1950 Moscow Mathematical Olympiad
---
Let $A$ be an arbitrary angle,let $B$ and $C$ be acute angles. Is there an angle $x$ such that $$ \sin x =\frac{\sin B \cdot \sin C}{1 - \cos B \cdot \cos C \cdot \cos A} ? $$
