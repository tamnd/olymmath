---
tag: Z6T2TP9FC0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2006 Germany Team Selection Test
    url: https://artofproblemsolving.com/community/c6h82146
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=40022
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=237025
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: de-tst/2006
    source: hf-ai-mo-aops
    label: 2006 Germany Team Selection Test
---
For any positive integer $n$ , let $w\left(n\right)$ denote the number of different prime divisors of the number $n$ . (For instance, $w\left(12\right)=2$ .) Show that there exist infinitely many positive integers $n$ such that $w\left(n\right)<w\left(n+1\right)<w\left(n+2\right)$ .
