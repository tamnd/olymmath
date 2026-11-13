---
tag: PG7W1WCDP9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2014 Stanford Mathematics Tournament
    url: https://artofproblemsolving.com/community/c6h2949248
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=74010
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=233525
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: smt/2014
    source: hf-ai-mo-aops
    label: 2014 Stanford Mathematics Tournament
---
Let $ABC$ be a triangle with sides $AB = 19$ , $BC = 21$ and $AC = 20$ . Let $\omega$ be the incircle of $ABC$ with center $I$ . Extend $BI$ so that it intersects $AC$ at $E$ . If $\omega$ is tangent to $AC$ at the point $D$ , then find the length of $DE$ .
