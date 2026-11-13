---
tag: Q2QVPMH8A5
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2018 Iran MO (3rd Round)
    url: https://artofproblemsolving.com/community/c6h1701919
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=16662
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=218299
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
$n\ge 2 $ is an integer.Prove that the number of natural numbers $m$ so that $0 \le m \le n^2-1,x^n+y^n \equiv m (mod n^2)$ has no solutions is at least $\binom{n}{2}$
