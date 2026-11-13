---
tag: F4PSQYPTX9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2008 Peru MO (ONEM)
    url: https://artofproblemsolving.com/community/c6h2966843
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=50639
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=246250
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: pe-mo/2008
    source: hf-ai-mo-aops
    label: 2008 Peru MO (ONEM)
---
Let $a$ and $b$ be real numbers for which the following is true: $acscx + b cot x \ge 1$ , for all $0 <x < \pi$ Find the least value of $a^2 + b$ .
