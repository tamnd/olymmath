---
tag: 1DF8C9FED4
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1992 All Soviet Union Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h1895566
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=55590
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=248957
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Soviet_Union/train/0001.parquet#row=267
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian/1992
    source: hf-ai-mo-aops
    label: 1992 All Soviet Union Mathematical Olympiad
---
A country contains $n$ cities and some towns. There is at most one road between each pair of towns and at most one road between each town and each city, but all the towns and cities are connected, directly or indirectly. We call a route between a city and a town a gold route if there is no other route between them which passes through fewer towns. Show that we can divide the towns and cities between $n$ republics, so that each belongs to just one republic, each republic has just one city, and each republic contains all the towns on at least one of the gold routes between each of its towns and its city.
