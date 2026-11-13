---
tag: MVMPA30GS3
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2022 Rioplatense Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h2973242
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=27618
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=228009
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: rioplatense/2022
    source: hf-ai-mo-aops
    label: 2022 Rioplatense Mathematical Olympiad
---
Prove that there exists infinitely many positive integers $n$ for which the equation $$ x^2+y^{11}-z^{2022!}=n $$ has no solution $(x,y,z)$ over the integers.
