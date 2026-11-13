---
tag: RQMANE3BQC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2008 Hong Kong TST
    url: https://artofproblemsolving.com/community/c6h238322
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=40741
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=237611
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hk-pc/2008
    source: hf-ai-mo-aops
    label: 2008 Hong Kong TST
---
Prove that there are infinitely many primes $ p$ such that the total number of solutions mod $ p$ to the equation $ 3x^{3}+4y^{4}+5z^{3}-y^{4}z \equiv 0$ is $ p^2$
