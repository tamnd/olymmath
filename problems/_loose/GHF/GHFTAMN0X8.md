---
tag: GHFTAMN0X8
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2011 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h1920825
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=7027
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: pumac/2011
    source: hf-ai-mo-aops
    label: 2011 Princeton University Math Competition
---
Let $f$ be an invertible function defined on the complex numbers such that $$z^2 = f(z + f(iz + f(-z + f(-iz + f(z + \ldots)))))$$
for all complex numbers $z$ . Suppose $z_0 \neq 0$ satisfies $f(z_0) = z_0$ . Find $1/z_0$ .
(Note: an invertible function is one that has an inverse).
