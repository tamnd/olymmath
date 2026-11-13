---
tag: ZBRKC5MZ53
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2012 Belarusian National Olympiad
    url: https://artofproblemsolving.com/community/c6h1220109
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=31259
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=230705
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: by-mo/2012
    source: hf-ai-mo-aops
    label: 2012 Belarusian National Olympiad
---
Find all pairs $(f,h)$ of functions $f,h:\mathbb{R}\rightarrow\mathbb{R}$ such as for all real $x$ and $y$ the equation holds. $$ f(x^2+yh(x))=xh(x)+f(xy) $$
