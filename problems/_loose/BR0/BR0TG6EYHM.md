---
tag: BR0TG6EYHM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2010 Slovenia National Olympiad
    url: https://artofproblemsolving.com/community/c6h377952
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=5695
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=207840
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: si-mo/2010
    source: hf-ai-mo-aops
    label: 2010 Slovenia National Olympiad
---
For real numbers $a, b$ and $c$ we have
$$(2b-a)^2 + (2b-c)^2 = 2(2b^2-ac).$$
Prove that the numbers $a, b$ and $c$ are three consecutive terms in some arithmetic sequence.
