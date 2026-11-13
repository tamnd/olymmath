---
tag: RPECS1XQDH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h81077
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=66390
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=199385
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ahsme
    source: hf-ai-mo-aops
    label: AHSME
---
How many primes less than $100$ have $7$ as the ones digit? (Assume the usual base ten representation)

$\text{(A)} \ 4 \text{(B)} \ 5 \text{(C)} \ 6 \text{(D)} \ 7 \text{(E)} \ 8$
