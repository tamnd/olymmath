---
tag: EPJW432FSW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2020 Iran MO (3rd Round)
    url: https://artofproblemsolving.com/community/c6h2347784
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44409
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240683
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo/2020
    source: hf-ai-mo-aops
    label: 2020 Iran MO (3rd Round)
---
For each $n$ find the number of ways one can put the numbers $\{1,2,3,...,n\}$ numbers on the circle, such that if for any $4$ numbers $a,b,c,d$ where $n|a+b-c-d$ . The segments joining $a,b$ and $c,d$ do not meet inside the circle. (Two ways are said to be identical , if one can be obtained from rotaiting the other)
