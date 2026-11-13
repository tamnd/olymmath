---
tag: VQFDT5PVE9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2006 Romania Team Selection Test
    url: https://artofproblemsolving.com/community/c6h84809
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=54565
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=248066
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-tst/2006
    source: hf-ai-mo-aops
    label: 2006 Romania Team Selection Test
---
For which pairs of positive integers $(m,n)$ there exists a set $A$ such that for all positive integers $x,y$ , if $|x-y|=m$ , then at least one of the numbers $x,y$ belongs to the set $A$ , and if $|x-y|=n$ , then at least one of the numbers $x,y$ does not belong to the set $A$ ?

*Adapted by Dan Schwarz from A.M.M.*
