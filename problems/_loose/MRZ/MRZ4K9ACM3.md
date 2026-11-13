---
tag: MRZ4K9ACM3
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2001 Cono Sur Olympiad
    url: https://artofproblemsolving.com/community/c6h420816
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=22205
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=223389
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cono-sur/2001
    source: hf-ai-mo-aops
    label: 2001 Cono Sur Olympiad
---
Three acute triangles are inscribed in the same circle with their vertices being nine distinct points. Show that one can choose a vertex from each triangle so that the three chosen points determine a triangle each of whose angles is at most $90^\circ$ .
