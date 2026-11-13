---
tag: 7VMAJ9QMMA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2016 Tuymaada Olympiad
    url: https://artofproblemsolving.com/community/c6h1469505
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=14889
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=216671
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tuymaada/2016
    source: hf-ai-mo-aops
    label: 2016 Tuymaada Olympiad
---
The flights map of air company $K_{r,r}$ presents several cities. Some cities are connected by a direct (two way) flight, the total number of flights is m. One must choose two non-intersecting groups of r cities each so that every city of the first group is connected by a flight with every city of the second group. Prove that number of possible choices does not exceed $2*m^r$ .
