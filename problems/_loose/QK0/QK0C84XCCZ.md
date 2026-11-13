---
tag: QK0C84XCCZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2006 Stanford Mathematics Tournament
    url: https://artofproblemsolving.com/community/c6h338395
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73902
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=263389
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: smt/2006
    source: hf-ai-mo-aops
    label: 2006 Stanford Mathematics Tournament
---
For positive integers $ n$ let $ D(n)$ denote the set of positive integers that divide $ n$ and let $ S(n)=\Sigma_{k \in D(n)} \frac{1}{k}$ . What is $ S(2006)$ ? Answer with a fraction reduced to lowest terms.
