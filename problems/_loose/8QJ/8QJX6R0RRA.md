---
tag: 8QJX6R0RRA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 Mongolian Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h3245678
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=946
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=204616
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: mn-mo/2023
    source: hf-ai-mo-aops
    label: 2023 Mongolian Mathematical Olympiad
---
Find all functions $f : \mathbb{R} \to \mathbb{R}$ and $h : \mathbb{R}^2 \to \mathbb{R}$ such that $$f(x+y-z)^2=f(xy)+h(x+y+z, xy+yz+zx)$$ for all real numbers $x,y,z$ .
