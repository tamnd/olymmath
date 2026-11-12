---
tag: WZEN1D7GNZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numina-olympiads
    url: https://huggingface.co/datasets/project-numina/olympiads
    capture: hf-numina-olympiads/default/train/0000.parquet#row=2511
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prouver que si $n$ est un entier strictement positif, l'expression

$$
\frac{\sqrt{n+\sqrt{0}}+\sqrt{n+\sqrt{1}}+\sqrt{n+\sqrt{2}}+\cdots \sqrt{n+\sqrt{n^{2}-1}}+\sqrt{n+\sqrt{n^{2}}}}{\sqrt{n-\sqrt{0}}+\sqrt{n-\sqrt{1}}+\sqrt{n-\sqrt{2}}+\cdots \sqrt{n-\sqrt{n^{2}-1}}+\sqrt{n-\sqrt{n^{2}}}}
$$

est indépendante de n .
