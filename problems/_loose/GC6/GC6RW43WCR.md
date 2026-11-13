---
tag: GC6RW43WCR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1982 Tournament Of Towns
    url: https://artofproblemsolving.com/community/c6h1898799
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=27891
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=144378
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tot
    source: hf-ai-mo-aops
    label: 1982 Tournament Of Towns
---
Prove that for all natural numbers $n$ greater than $1$ : $$ [\sqrt{n}] + [\sqrt[3]{n}] +...+[ \sqrt[n]{n}] = [\log_2 n] + [\log_3 n] + ... + [\log_n n] $$ (VV Kisil)
