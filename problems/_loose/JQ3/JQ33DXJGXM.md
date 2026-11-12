---
tag: JQ33DXJGXM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2011 Harvard-MIT Mathematics Tournament
    url: https://artofproblemsolving.com/community/c6h426677
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=6498
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numina-olympiads
    url: https://huggingface.co/datasets/project-numina/olympiads
    capture: hf-numina-olympiads/default/train/0000.parquet#row=4111
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
Let $H$ be a regular hexagon of side length $x$ . Call a hexagon in the same plane a "distortion" of $H$ if
and only if it can be obtained from $H$ by translating each vertex of $H$ by a distance strictly less than $1$ . Determine the smallest value of $x$ for which every distortion of $H$ is necessarily convex.
