---
tag: F3001DGSYS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2019 Hong Kong TST
    url: https://artofproblemsolving.com/community/c6h1693992
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=17695
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=219274
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Hong_Kong/train/0000.parquet#row=353
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hk-pc/2019
    source: hf-ai-mo-aops
    label: 2019 Hong Kong TST
  - at: hk-pc
    source: hf-mathnet
    label: Hong Kong HKG TST
---
Find an integral solution of the equation
$$ \left \lfloor \frac{x}{1!} \right \rfloor + \left \lfloor \frac{x}{2!} \right \rfloor + \left \lfloor \frac{x}{3!} \right \rfloor + \dots + \left \lfloor \frac{x}{10!} \right \rfloor = 2019. $$
(Note $\lfloor u \rfloor$ stands for the greatest integer less than or equal to $u$ .)
