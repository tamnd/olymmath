---
tag: 97KRNA6D6E
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h82280
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=66476
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=199463
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
For how many integers $N$ between $1$ and $1990$ is the improper fraction $\frac{N^2+7}{N+4}$ not in lowest terms?

$\text{(A)} \ 0 \text{(B)} \ 86 \text{(C)} \ 90 \text{(D)} \ 104 \text{(E)} \ 105$
