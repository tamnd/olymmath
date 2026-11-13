---
tag: J79QCRJ8ZF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=166455
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We will prove that for every natural number $n$, the following identity holds:

$$
\operatorname{tg} \alpha + \frac{1}{2} \operatorname{tg} \frac{\alpha}{2} + \frac{1}{4} \operatorname{tg} \frac{\alpha}{4} + \ldots + \frac{1}{2^{n}} \operatorname{tg} \frac{\alpha}{2^{n}} = \frac{1}{2^{n}} \operatorname{ctg} \frac{\alpha}{2^{n}} - 2 \operatorname{ctg} 2 \alpha.
$$
