---
tag: H9RETZGZVA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2017 Singapore Senior Math Olympiad
    url: https://artofproblemsolving.com/community/c6h2042485
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=59410
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=251547
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: sg-smo/2017
    source: hf-ai-mo-aops
    label: 2017 Singapore Senior Math Olympiad
---
Find all functions $f : Z^+ \to Z^+$ such that $f(k + 1) >f(f(k))$ for $k > 1$ , where $Z^+$ is the set of positive integers.
