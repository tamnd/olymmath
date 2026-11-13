---
tag: ZMPK01BVPE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1987 Tournament Of Towns
    url: https://artofproblemsolving.com/community/c6h2065928
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=28000
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=228349
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tot
    source: hf-ai-mo-aops
    label: 1987 Tournament Of Towns
---
A machine gives out five pennies for each nickel inserted into it and five nickels for each penny. Can Peter , who starts out with one penny, use the machine several times in such a way as to end up with an equal number of nickels and pennies?

(F. Nazarov, Leningrad Olympiad, 1987)
