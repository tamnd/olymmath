---
tag: KNF6TPKQFS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=13165
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
With a four-digit number, the following operation is performed: the first and second digits in the notation of this number are written at the end, and the first digit is erased ($1234 \rightarrow 23412$), the same is done with the resulting five-digit number $(23412 \rightarrow 341223)$, and so on. Prove that for any four-digit number, after several such operations, a composite number will be obtained.
