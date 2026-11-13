---
tag: 9CN9FQAX24
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2019 USEMO
    url: https://artofproblemsolving.com/community/c6h2120326
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=74370
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=157270
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: usemo/2019
    source: hf-ai-mo-aops
    label: 2019 USEMO
---
Let $\mathcal{P}$ be a regular polygon, and let $\mathcal{V}$ be its set of vertices. Each point in $\mathcal{V}$ is colored red, white, or blue. A subset of $\mathcal{V}$ is *patriotic* if it contains an equal number of points of each color, and a side of $\mathcal{P}$ is *dazzling* if its endpoints are of different colors.

Suppose that $\mathcal{V}$ is patriotic and the number of dazzling edges of $\mathcal{P}$ is even. Prove that there exists a line, not passing through any point in $\mathcal{V}$ , dividing $\mathcal{V}$ into two nonempty patriotic subsets.

*Ankan Bhattacharya*
