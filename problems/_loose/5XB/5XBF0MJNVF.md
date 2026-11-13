---
tag: 5XBF0MJNVF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1979 All Soviet Union Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h1875111
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=55311
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=248678
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian/1979
    source: hf-ai-mo-aops
    label: 1979 All Soviet Union Mathematical Olympiad
---
Natural $p$ and $q$ are relatively prime. The $[0,1]$ is divided onto $(p+q)$ equal segments. Prove that every segment except two marginal contain exactly one from the $(p+q-2)$ numbers $$ \{1/p, 2/p, ... , (p-1)/p, 1/q, 2/q, ... , (q-1)/q\} $$
