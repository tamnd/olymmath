---
tag: 8ND35TDQJ4
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2000 Croatia National Olympiad
    url: https://artofproblemsolving.com/community/c6h2554625
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=37254
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=235228
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
We are given coins of $1,2,5,10,20,50$ lipas and of $1$ kuna (Croatian currency: $1$ kuna = $100$ lipas). Prove that if a bill of $M$ lipas can be paid by $N$ coins, then a bill of $N$ kunas can be paid by M coins.
