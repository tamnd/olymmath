---
tag: RKY1KGE431
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=83097
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: apmo/2011
    source: hf-numinamath-1-5
    label: APMO 2011
---
Find all bounded real functions such that for all real $x, y$, we have:

$$
f(x f(y))+y f(x)=x f(y)+f(x y)
$$

(APMO 2011)
