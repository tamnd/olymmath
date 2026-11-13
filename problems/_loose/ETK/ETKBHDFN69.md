---
tag: ETKBHDFN69
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2018 Romania National Olympiad
    url: https://artofproblemsolving.com/community/c6h3392461
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=16941
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=178231
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-nmo/2018
    source: hf-ai-mo-aops
    label: 2018 Romania National Olympiad
---
Let $a, b, c, d$ be natural numbers such that $a + b + c + d = 2018$ . Find the minimum value of the expression: $$ E = (a-b)^2 + 2(a-c)^2 + 3(a-d)^2+4(b-c)^2 + 5(b-d)^2 + 6(c-d)^2. $$
