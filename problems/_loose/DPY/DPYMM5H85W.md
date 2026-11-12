---
tag: DPYMM5H85W
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2004 All-Russian Olympiad
    url: https://artofproblemsolving.com/community/c6h5506
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=55822
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=54200
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian/2004
    source: hf-ai-mo-aops
    label: 2004 All-Russian Olympiad
---
Are there such pairwise distinct natural numbers $ m, n, p, q$ satisfying $ m + n = p + q$ and $ \sqrt{m} + \sqrt[3]{n} = \sqrt{p} + \sqrt[3]{q} > 2004$ ?
