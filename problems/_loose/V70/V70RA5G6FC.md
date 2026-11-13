---
tag: V70RA5G6FC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2021 Abels Math Contest (Norwegian MO) Final
    url: https://artofproblemsolving.com/community/c6h2576585
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=19733
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=221259
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: no-abel/2021
    source: hf-ai-mo-aops
    label: 2021 Abels Math Contest (Norwegian MO) Final
---
The tangent at $C$ to the circumcircle of triangle $ABC$ intersects the line through $A$ and $B$ in a point $D$ . Two distinct points $E$ and $F$ on the line through $B$ and $C$ satisfy $|BE| = |BF | =\frac{||CD|^2 - |BD|^2|}{|BC|}$ . Show that either $|ED| = |CD|$ or $|FD| = |CD|$ .
