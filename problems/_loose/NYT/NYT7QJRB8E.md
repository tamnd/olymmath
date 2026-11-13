---
tag: NYT7QJRB8E
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2014 Peru Iberoamerican Team Selection Test
    url: https://artofproblemsolving.com/community/c6h3156744
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=50485
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=246119
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: pe-ibero-tst/2014
    source: hf-ai-mo-aops
    label: 2014 Peru Iberoamerican Team Selection Test
---
Determine the minimum value of $$ x^{2014} + 2x^{2013} + 3x^{2012} + 4x^{2011} +\ldots + 2014x + 2015 $$ where $x$ is a real number.
