---
tag: F9VNH05MAR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2004 India IMO Training Camp
    url: https://artofproblemsolving.com/community/c6h53053
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=42215
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=238800
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: in-tst/2004
    source: hf-ai-mo-aops
    label: 2004 India IMO Training Camp
---
Determine all functionf $f : \mathbb{R} \mapsto \mathbb{R}$ such that

$$ f(x+y) = f(x)f(y) - c \sin{x} \sin{y} $$ for all reals $x,y$ where $c> 1$ is a given constant.
