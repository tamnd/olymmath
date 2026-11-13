---
tag: FYAMPQR1J1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2022 Bulgarian Spring Math Competition
    url: https://artofproblemsolving.com/community/c6h2810688
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=60
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=203718
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: bg-spring/2022
    source: hf-ai-mo-aops
    label: 2022 Bulgarian Spring Math Competition
---
Find all primes $p$ , such that there exist positive integers $x$ , $y$ which satisfy $$ \begin{cases}
p + 49 = 2x^2
p^2 + 49 = 2y^2
\end{cases} $$
