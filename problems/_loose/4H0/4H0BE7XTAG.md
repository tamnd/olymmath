---
tag: 4H0BE7XTAG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1981 IMO Shortlist
    url: https://artofproblemsolving.com/community/c6h366951
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=25193
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=225942
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: isl/1981
    source: hf-ai-mo-aops
    label: 1981 IMO Shortlist
---
Find the minimum value of
$$\max(a + b + c, b + c + d, c + d + e, d + e + f, e + f + g)$$
subject to the constraints

(i) $a, b, c, d, e, f, g \geq 0,$

(ii) $ a + b + c + d + e + f + g = 1.$
