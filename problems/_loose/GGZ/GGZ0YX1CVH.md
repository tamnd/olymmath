---
tag: GGZ0YX1CVH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2018 Iran MO (3rd Round)
    url: https://artofproblemsolving.com/community/c6h1701921
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=16663
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=218300
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo/2018
    source: hf-ai-mo-aops
    label: 2018 Iran MO (3rd Round)
---
Prove that for every prime number $p$ there exist infinity many natural numbers $n$ so that they satisfy: $2^{2^{2^{ \dots ^{2^n}}}} \equiv n^{2^{2^{\dots ^{2}}}} (mod p)$ Where in both sides $2$ appeared $1397$ times
