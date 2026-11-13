---
tag: M0Y4JHG5FW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h258295
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=65280
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=198419
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
If the sum $ 1 + 2 + 3 + \cdots + K$ is a perfect square $ N^2$ and if $ N$ is less than $ 100$ , then the possible values for $ K$ are:

$ \textbf{(A)}\ \text{only }1 \textbf{(B)}\ 1\text{ and }8 \textbf{(C)}\ \text{only }8 \textbf{(D)}\ 8\text{ and }49 \textbf{(E)}\ 1,8,\text{ and }49$
