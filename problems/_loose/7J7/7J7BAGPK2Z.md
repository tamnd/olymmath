---
tag: 7J7BAGPK2Z
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2009 Tournament Of Towns
    url: https://artofproblemsolving.com/community/c6h365028
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=4358
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=206541
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tot
    source: hf-ai-mo-aops
    label: 2009 Tournament Of Towns
---
We only know that the password of a safe consists of $7$ different digits. The safe will open if we enter $7$ different digits, and one of them matches the corresponding digit of the password. Can we open this safe in less than $7$ attempts?

*(5 points for Juniors and 4 points for Seniors)*
