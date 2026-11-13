---
tag: CPPKX1MRYR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2009 Switzerland - Final Round
    url: https://artofproblemsolving.com/community/c6h2984892
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=60523
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=252601
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ch-smo/2009
    source: hf-ai-mo-aops
    label: 2009 Switzerland - Final Round
---
Find all functions $f : R_{>0} \to R_{>0}$ , which for all $x > y > z > 0$ is the following equation holds $$ f(x - y + z) = f(x) + f(y) + f(z) - xy - yz + xz. $$
