---
tag: RXM9FKZEMS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1994 All-Russian Olympiad
    url: https://artofproblemsolving.com/community/c6h1682193
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=55644
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=249011
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian/1994
    source: hf-ai-mo-aops
    label: 1994 All-Russian Olympiad
---
Cards numbered with numbers $1$ to $1000$ are to be placed on the cells of a $1\times 1994$ rectangular board one by one, according to the following rule: If the cell next to the cell containing the card $n$ is free, then the card $n+1$ must be put on it. Prove that the number of possible arrangements is not more than half a mllion.
