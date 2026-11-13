---
tag: B40DMN3MW8
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2008 Belarusian National Olympiad
    url: https://artofproblemsolving.com/community/c6h1334360
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=31226
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=230672
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: by-mo/2008
    source: hf-ai-mo-aops
    label: 2008 Belarusian National Olympiad
---
Prove, if $x^2+y=y^2+z=z^2+x$ , then $$ x^3+y^3+z^3=xy^2+yz^2+zx^2 $$
