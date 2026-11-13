---
tag: 24FN3TSK1X
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2022 CMIMC
    url: https://artofproblemsolving.com/community/c6h2791447
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=147
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=203796
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cmimc/2022
    source: hf-ai-mo-aops
    label: 2022 CMIMC
---
Let $z$ be a complex number that satisfies the equation $$\frac{z-4}{z^2-5z+1} + \frac{2z-4}{2z^2-5z+1} + \frac{z-2}{z^2-3z+1} = \frac{3}{z}.$$ Over all possible values of $z$ , find the sum of the values of $$\left| \frac{1}{z^2-5z+1} + \frac{1}{2z^2-5z+1} + \frac{1}{z^2-3z+1} \right|.$$

*Proposed by Justin Hsieh*
