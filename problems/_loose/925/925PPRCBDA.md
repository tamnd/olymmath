---
tag: 925PPRCBDA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2022 Romania EGMO TST
    url: https://artofproblemsolving.com/community/c6h2781232
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=400
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=204075
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-egmo-tst/2022
    source: hf-ai-mo-aops
    label: 2022 Romania EGMO TST
---
Let $p\geq 3$ be an odd positive integer. Show that $p$ is prime if and only if however we choose $(p+1)/2$ pairwise distinct positive integers, we can find two of them, $a$ and $b$ , such that $(a+b)/\gcd(a,b)\geq p.$
