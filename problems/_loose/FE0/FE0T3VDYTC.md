---
tag: FE0T3VDYTC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2017 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h1422697
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=78563
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=267410
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2017
    source: hf-ai-mo-aops
    label: 2017 Online Math Open Problems
---
There are $15$ (not necessarily distinct) integers chosen uniformly at random from the range from $0$ to $999$ , inclusive. Yang then computes the sum of their units digits, while Michael computes the last three digits of their sum. The probability of them getting the same result is $\frac mn$ for relatively prime positive integers $m,n$ . Find $100m+n$ *Proposed by Yannick Yao*
