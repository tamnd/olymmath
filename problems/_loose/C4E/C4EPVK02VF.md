---
tag: C4EPVK02VF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numina-olympiads
    url: https://huggingface.co/datasets/project-numina/olympiads
    capture: hf-numina-olympiads/default/train/0000.parquet#row=2206
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=254202
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Soit $x, y, z$ trois réels positifs, tel que $x \leqslant 1$. Démontrer que:

$$
x y+y+2 z \geqslant 4 \sqrt{x y z}
$$
