---
tag: FJEJXE5EMR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: Russian TST 2018
    url: https://artofproblemsolving.com/community/c6h2067963
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=57202
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=250020
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-tst/2018
    source: hf-ai-mo-aops
    label: Russian TST 2018
---
Let $a,b,c>0.$ Prove that $\frac{1}{a+b}+\frac{1}{b+c}+\frac{1}{c+a} \ge \frac{1}{\sqrt{2a^2+2bc}}+\frac{1}{\sqrt{2b^2+2ca}}+\frac{1}{\sqrt{2c^2+2ab}}$
