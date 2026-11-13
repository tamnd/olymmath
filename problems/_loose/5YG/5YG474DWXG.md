---
tag: 5YG474DWXG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2007 Irish Math Olympiad
    url: https://artofproblemsolving.com/community/c6h287215
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44863
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=241101
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ie-irmo/2007
    source: hf-ai-mo-aops
    label: 2007 Irish Math Olympiad
---
Air Michael and Air Patrick operate direct flights connecting Belfast, Cork, Dublin, Galway, Limerick, and Waterord. For each pair of cities exactly one of the airlines operates the route (in both directions) connecting the cities. Prove that there are four cities for which one of the airlines operates a round trip. (Note that a round trip of four cities $ P,Q,R,$ and $ S$ , is a journey that follows the path $ P \rightarrow Q \rightarrow R \rightarrow S \rightarrow P$ .)
