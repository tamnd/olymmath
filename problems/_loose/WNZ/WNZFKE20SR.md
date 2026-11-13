---
tag: WNZFKE20SR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2014 Abels Math Contest (Norwegian MO) Final
    url: https://artofproblemsolving.com/community/c6h1909893
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=10646
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=212602
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: no-abel/2014
    source: hf-ai-mo-aops
    label: 2014 Abels Math Contest (Norwegian MO) Final
---
Find all functions $f : R-\{0\} \to R$ which satisfy $(1 + y)f(x) - (1 + x)f(y) = yf(x/y) - xf(y/x)$ for all real $x, y \ne 0$ , and which take the values $f(1) = 32$ and $f(-1) = -4$ .
