---
tag: T5PM1H72HZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2020 JBMO Shortlist
    url: https://artofproblemsolving.com/community/c6h2610075
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=26156
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=226847
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/JBMO/train/0000.parquet#row=355
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: jbmo-sl/2020
    source: hf-ai-mo-aops
    label: 2020 JBMO Shortlist
  - at: jbmo
    source: hf-mathnet
    label: JBMO Junior Balkan Mathematical Olympiad
---
Prove that there doesn't exist any prime $p$ such that every power of $p$ is a palindrome (a palindrome is a number that is read the same from the left as it is from the right; in particular, a number that ends in one or more zeros cannot be a palindrome).
