---
tag: AME8CF5F68
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2025 Argentina National Math Olympiad Level 3
    url: https://artofproblemsolving.com/community/c6h3716661
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=79655
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=177254
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ar-oma/2025
    source: hf-ai-mo-aops
    label: 2025 Argentina National Math Olympiad Level 3
---
Find all pairs $(p,q)$ of positive prime numbers, not necessarily distinct, such that the expression $p^2+3pq+q^2$ is

- a perfect square;

- a power of $5$ .
