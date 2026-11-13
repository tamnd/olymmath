---
tag: 1GTNEXFH0W
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2012 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h459997
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=8409
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=210473
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2012
    source: hf-ai-mo-aops
    label: 2012 Online Math Open Problems
---
Suppose that $$\sum_{i=1}^{982} 7^{i^2}$$ can be expressed in the form $983q + r$ , where $q$ and $r$ are integers and $0 \leq r \leq 492$ . Find $r$ .

*Author: Alex Zhu*
