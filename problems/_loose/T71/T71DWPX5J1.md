---
tag: T71DWPX5J1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2010 IberoAmerican
    url: https://artofproblemsolving.com/community/c6h368535
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=4956
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=207116
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ibero/2010
    source: hf-ai-mo-aops
    label: 2010 IberoAmerican
---
Determine if there are positive integers $a, b$ such that all terms of the sequence defined by
$$ x_{1}= 2010,x_{2}= 2011 x_{n+2}= x_{n}+ x_{n+1}+a\sqrt{x_{n}x_{n+1}+b} (n\ge 1) $$ are integers.
