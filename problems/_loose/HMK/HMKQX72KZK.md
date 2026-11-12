---
tag: HMKQX72KZK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numina-olympiads
    url: https://huggingface.co/datasets/project-numina/olympiads
    capture: hf-numina-olympiads/default/train/0000.parquet#row=2232
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Soient $a_{1}, \ldots, a_{2019}$ des entiers positifs. Montrer qu'il y a équivalence entre:
(i) il existe un réel $x$ tel que pour tout $i \in\{1, \ldots, 2019\}$, on a : $a_{i}=\lfloor i x\rfloor$
(ii) pour tous $\boldsymbol{i}, \mathfrak{j} \in\{1, \ldots, 2019\}$ vérifiant $i+j \leqslant 2019$, on $a: a_{i}+a_{j} \leqslant a_{i+j} \leqslant a_{i}+a_{j}+1$.
