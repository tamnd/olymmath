---
tag: ENE6K8S0DH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h256133
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=65152
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=256625
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
The sum of the numerical coefficients in the expansion of the binomial $ (a+b)^8$ is:

$ \textbf{(A)}\ 32 \textbf{(B)}\ 16 \textbf{(C)}\ 64 \textbf{(D)}\ 48 \textbf{(E)}\ 7$
