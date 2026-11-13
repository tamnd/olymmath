---
tag: SZJ9JENA4G
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2020 Bangladesh Mathematical Olympiad National
    url: https://artofproblemsolving.com/community/c6h2784513
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=30858
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=230174
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: bd-bdmo/2020
    source: hf-ai-mo-aops
    label: 2020 Bangladesh Mathematical Olympiad National
---
$f$ is a one-to-one function from the set of positive integers to itself such that $$ f(xy) = f(x) × f(y) $$ Find the minimum possible value of $f(2020)$ .
