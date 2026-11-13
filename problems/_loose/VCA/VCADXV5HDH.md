---
tag: VCADXV5HDH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2009 Germany Team Selection Test
    url: https://artofproblemsolving.com/community/c6h289404
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=3464
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=205661
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: de-tst/2009
    source: hf-ai-mo-aops
    label: 2009 Germany Team Selection Test
---
Find all functions $ f: \mathbb{R} \mapsto \mathbb{R}$ such that $ \forall x,y,z \in \mathbb{R}$ we have: If
$$ x^3 + f(y) \cdot x + f(z) = 0,$$
then
$$ f(x)^3 + y \cdot f(x) + z = 0.$$
