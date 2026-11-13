---
tag: YATKQWGK58
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2012 IberoAmerican
    url: https://artofproblemsolving.com/community/c6h500892
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=7942
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=210011
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ibero/2012
    source: hf-ai-mo-aops
    label: 2012 IberoAmerican
---
Let $a,b,c,d$ be integers such that the number $a-b+c-d$ is odd and it divides the number $a^2-b^2+c^2-d^2$ . Show that, for every positive integer $n$ , $a-b+c-d$ divides $a^n-b^n+c^n-d^n$ .
