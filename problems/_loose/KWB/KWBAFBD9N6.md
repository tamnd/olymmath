---
tag: KWBAFBD9N6
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 Rioplatense Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h3211854
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=27638
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=228026
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: rioplatense/2023
    source: hf-ai-mo-aops
    label: 2023 Rioplatense Mathematical Olympiad
---
Find all functions $f:\mathbb{Z} \rightarrow \mathbb{Z}$ such that $$ f(x+f(y+1))+f(xy)=f(x+1)(f(y)+1) $$ for any $x,y$ integers.
