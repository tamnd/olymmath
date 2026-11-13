---
tag: PY619CBHQM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2011 Harvard-MIT Mathematics Tournament
    url: https://artofproblemsolving.com/community/c6h520362
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=6511
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numina-olympiads
    url: https://huggingface.co/datasets/project-numina/olympiads
    capture: hf-numina-olympiads/default/train/0000.parquet#row=4117
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=151300
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hmmt/2011
    source: hf-ai-mo-aops
    label: 2011 Harvard-MIT Mathematics Tournament
  - at: hmmt/2011
    source: hf-numina-olympiads
    label: HMMT February
---
Let $ABCD$ be a square of side length $13$ . Let $E$ and $F$ be points on rays $AB$ and $AD$ respectively, so that the area of square $ABCD$ equals the area of triangle $AEF$ . If $EF$ intersects $BC$ at $X$ and $BX = 6$ , determine $DF$ .
