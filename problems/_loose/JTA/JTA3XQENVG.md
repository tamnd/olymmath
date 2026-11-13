---
tag: JTA3XQENVG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2024 Bangladesh Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h3279559
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=1507
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00002-of-00003.parquet#row=148639
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: bd-bdmo/2024
    source: hf-ai-mo-aops
    label: 2024 Bangladesh Mathematical Olympiad
  - at: cono-sur/2007
    source: hf-ai-mo-aops
    label: 2007 Cono Sur Olympiad
  - at: cono-sur
    source: hf-mathnet
    label: Argentina XVIII Olimpiada Matemática del Cono Sur
---
Find all non-negative integers $x, y$ such that$$x^3y+x+y=xy+2xy^2$$
