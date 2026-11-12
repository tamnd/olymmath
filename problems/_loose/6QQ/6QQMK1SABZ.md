---
tag: 6QQMK1SABZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numina-olympiads
    url: https://huggingface.co/datasets/project-numina/olympiads
    capture: hf-numina-olympiads/default/train/0000.parquet#row=1742
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Gegeven een natuurlijk getal $n$ definiëren we $\tau(n)$ als het aantal natuurlijke getallen dat $n$ deelt, en definiëren we $\sigma(n)$ als de som van deze delers. Vind alle natuurlijke getallen $n$ waarvoor geldt dat

$$
\sigma(n)=\tau(n) \cdot\lceil\sqrt{n}\rceil .
$$

Voor een reëel getal $x$ bedoelen we met de notatie $\lceil x\rceil$ het kleinste gehele getal groter of gelijk aan $x$.
