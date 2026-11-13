---
tag: AK51RKDW3E
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2016 India IMO Training Camp
    url: https://artofproblemsolving.com/community/c6h1276390
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=14084
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=215879
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: in-tst/2016
    source: hf-ai-mo-aops
    label: 2016 India IMO Training Camp
---
Let $n$ be an odd natural number. We consider an $n\times n$ grid which is made up of $n^2$ unit squares and $2n(n+1)$ edges. We colour each of these edges either $\color{red} \textit{red}$ or $\color{blue}\textit{blue}$ . If there are at most $n^2$ $\color{red} \textit{red}$ edges, then show that there exists a unit square at least three of whose edges are $\color{blue}\textit{blue}$ .
