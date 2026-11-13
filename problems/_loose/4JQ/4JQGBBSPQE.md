---
tag: 4JQGBBSPQE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2020 Hong Kong TST
    url: https://artofproblemsolving.com/community/c6h1902959
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=18875
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=220406
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hk-pc/2020
    source: hf-ai-mo-aops
    label: 2020 Hong Kong TST
---
Find the total number of primes $p<100$ such that $\lfloor (2+\sqrt{5})^p \rfloor-2^{p+1}$ is divisible by $p$ . Here $\lfloor x \rfloor$ denotes the greatest integer less than or equal to $x$ .
