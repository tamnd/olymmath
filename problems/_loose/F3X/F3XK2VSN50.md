---
tag: F3XK2VSN50
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=169165
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For a triangle with sides $a, b, c$, the height corresponding to side $c$ is $m$, and the angle opposite to side $c$ is $\gamma$. Prove that

$$
a+b+m \leq \frac{2+\cos \frac{\gamma}{2}}{2 \sin \frac{\gamma}{2}} c
$$
