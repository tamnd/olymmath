---
tag: ZFYCNGT485
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2001 Moldova National Olympiad
    url: https://artofproblemsolving.com/community/c6h2525938
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=48199
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=244092
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: md-mo/2001
    source: hf-ai-mo-aops
    label: 2001 Moldova National Olympiad
---
Let $n$ be a positive integer. We denote by $S$ the sum of elements of the set $M=\{x\in\mathbb N|(n-1)^2\le x<(n+1)^2\}$ .
(a) Show that $S$ is divisible by $6$ .
(b) Find all $n\in\mathbb N$ for which $S+(1-n)(1+n)=2001$ .
