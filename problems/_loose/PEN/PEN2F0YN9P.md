---
tag: PEN2F0YN9P
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2000 Croatia National Olympiad
    url: https://artofproblemsolving.com/community/c6h2555457
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=37264
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=235238
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hr-mo/2000
    source: hf-ai-mo-aops
    label: 2000 Croatia National Olympiad
---
Let $S$ be the set of all squarefree numbers and $n$ be a natural number. Prove that $$ \sum_{k\in S}\left\lfloor\sqrt{\frac nk}\right\rfloor=n. $$
