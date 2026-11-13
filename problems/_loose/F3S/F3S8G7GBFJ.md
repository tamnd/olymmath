---
tag: F3S8G7GBFJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2011 Czech-Polish-Slovak Match
    url: https://artofproblemsolving.com/community/c6h423187
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=6377
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=208516
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: caps/2011
    source: hf-ai-mo-aops
    label: 2011 Czech-Polish-Slovak Match
---
Let $a$ be any integer. Prove that there are infinitely many primes $p$ such that $$ p\,| n^2+3 \text{and} p\,| m^3-a $$ for some integers $n$ and $m$ .
