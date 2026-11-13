---
tag: EYRK8HHD3B
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2021 Kazakhstan National Olympiad
    url: https://artofproblemsolving.com/community/c6h2543749
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=45797
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=242396
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: kz-mo/2021
    source: hf-ai-mo-aops
    label: 2021 Kazakhstan National Olympiad
---
Find all functions $f : \mathbb{R^{+}}\to \mathbb{R^{+}}$ such that $$ f(x)^2=f(xy)+f(x+f(y))-1 $$ for all $x, y\in \mathbb{R^{+}}$
