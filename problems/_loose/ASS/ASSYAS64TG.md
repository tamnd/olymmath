---
tag: ASSYAS64TG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2005 Germany Team Selection Test
    url: https://artofproblemsolving.com/community/c6h28929
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=40001
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=237004
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: de-tst/2005
    source: hf-ai-mo-aops
    label: 2005 Germany Team Selection Test
---
We have $2p-1$ integer numbers, where $p$ is a prime number. Prove that we can choose exactly $p$ numbers (from these $2p-1$ numbers) so that their sum is divisible by $p$ .
