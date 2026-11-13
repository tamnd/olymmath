---
tag: 2VATKQ47Z7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2012 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h460018
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=8430
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=210494
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2012
    source: hf-ai-mo-aops
    label: 2012 Online Math Open Problems
---
$a$ and $b$ are real numbers that satisfy $$a^4+a^2b^2+b^4=900,$$ $$a^2+ab+b^2=45.$$ Find the value of $2ab.$ *Author: Ray Li*
