---
tag: NYT63YMGAB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2000 Harvard-MIT Mathematics Tournament
    url: https://artofproblemsolving.com/community/c6h3272500
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=71307
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=268737
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hmmt/2000
    source: hf-ai-mo-aops
    label: 2000 Harvard-MIT Mathematics Tournament
---
If $a$ is a root of $x^3-x-1 = 0$ , compute the value of $$ a^{10 }+ 2a^8 -a^7 - 3a^6 - 3a^5 + 4a^4 + 2a^3 - 4a^4 - 6a - 17. $$
