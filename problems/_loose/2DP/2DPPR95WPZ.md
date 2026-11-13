---
tag: 2DPPR95WPZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2008 Switzerland - Final Round
    url: https://artofproblemsolving.com/community/c6h2984878
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=60514
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=252592
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ch-smo/2008
    source: hf-ai-mo-aops
    label: 2008 Switzerland - Final Round
---
Determine all functions $f : R^+ \to R^+$ , so that for all $x, y > 0$ : $$ f(xy) \le \frac{xf(y) + yf(x)}{2} $$
