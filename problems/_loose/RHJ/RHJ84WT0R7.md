---
tag: RHJ84WT0R7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h455348
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=66425
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=257897
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
A child has a set of $96$ distinct blocks. Each block is one of $2$ materials (*plastic, wood*), $3$ sizes (*small, medium, large*), $4$ colors (*blue, green, red, yellow*), and $4$ shapes (*circle, hexagon, square, triangle*). How many blocks in the set are different from the "*plastic medium red circle*" in exactly two ways? (The "*wood medium red square*" is such a block.) $ \textbf{(A)}\ 29 \textbf{(B)}\ 39 \textbf{(C)}\ 48 \textbf{(D)}\ 56 \textbf{(E)}\ 62 $
