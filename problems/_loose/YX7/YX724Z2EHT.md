---
tag: YX724Z2EHT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=187494
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove that

$$
S=\operatorname{tg} a_{1} \operatorname{tg} a_{2}+\operatorname{tg} a_{2} \operatorname{tg} a_{3}+\ldots+\operatorname{tg} a_{n} \operatorname{tg} a_{n+1}=\frac{\sin \left(a_{n+1}-a_{1}\right)}{\cos a_{1} \cos a_{n+1} \operatorname{tg} \alpha}-n
$$

where $a_{1}, a_{2}, \ldots, a_{n}, a_{n+1}$ are consecutive terms of an arithmetic progression with difference $\alpha$.
