---
tag: BPF7E4P3HW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2014 Iran MO (2nd Round)
    url: https://artofproblemsolving.com/community/c6h587736
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=11310
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=213254
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo-r2/2014
    source: hf-ai-mo-aops
    label: 2014 Iran MO (2nd Round)
---
Let $ x,y,z $ be three non-negative real numbers such that $$x^2+y^2+z^2=2(xy+yz+zx). $$ Prove that $$\dfrac{x+y+z}{3} \ge \sqrt[3]{2xyz}.$$
