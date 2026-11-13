---
tag: FVRDSJX6MT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2018 Iran MO (3rd Round)
    url: https://artofproblemsolving.com/community/c6h1702967
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=16664
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=218301
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo/2018
    source: hf-ai-mo-aops
    label: 2018 Iran MO (3rd Round)
---
For positive real numbers $a,b,c$ such that $ab+ac+bc=1$ prove that: $\prod\limits_{cyc} (\sqrt{bc}+\frac{1}{2a+\sqrt{bc}}) \ge 8abc$
