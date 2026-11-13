---
tag: WVQZMVX44K
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2002 Romania National Olympiad
    url: https://artofproblemsolving.com/community/c6h381474
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=54022
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=247572
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-nmo/2002
    source: hf-ai-mo-aops
    label: 2002 Romania National Olympiad
---
Given real numbers $a,c,d$ show that there exists at most one function $f:\mathbb{R}\rightarrow\mathbb{R}$ which satisfies:
$$f(ax+c)+d\le x\le f(x+d)+c \text{for any}\ x\in\mathbb{R}$$
