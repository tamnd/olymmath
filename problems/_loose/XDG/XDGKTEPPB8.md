---
tag: XDGKTEPPB8
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=250945
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Saudi_Arabia/train/0001.parquet#row=276
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
You plan to organize your birthday party, which will be attended either by exactly $m$ persons or by exactly $n$ persons (you are not sure at the moment). You have a big birthday cake and you want to divide it into several parts (not necessarily equal), so that you are able to distribute the whole cake among the people attending the party with everybody getting cake of equal mass (however, one may get one big slice, while others several small slices - the sizes of slices may differ). What is the minimal number of parts you need to divide the cake, so that it is possible, regardless of the number of guests.
