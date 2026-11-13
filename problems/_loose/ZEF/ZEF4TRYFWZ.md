---
tag: ZEF4TRYFWZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: Russian TST 2016
    url: https://artofproblemsolving.com/community/c6h3056242
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=57176
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=249995
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-tst/2016
    source: hf-ai-mo-aops
    label: Russian TST 2016
---
Let $x,y,z{}$ be positive real numbers. Prove that $$(xy+yz+zx)\left(\frac{1}{x^2+y^2}+\frac{1}{y^2+z^2}+\frac{1}{z^2+x^2}\right)>\frac{5}{2}.$$
