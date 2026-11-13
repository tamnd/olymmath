---
tag: KVZN5Z4GFB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90341
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0005.parquet#row=140
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Show that for all real numbers $a, b, c$,

$$
a^{6}+b^{6}+c^{6}-3 a^{2} b^{2} c^{2} \geq \frac{1}{2}(a-b)^{2}(b-c)^{2}(c-a)^{2}
$$
