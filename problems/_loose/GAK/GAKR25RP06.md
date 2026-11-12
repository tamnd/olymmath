---
tag: GAKR25RP06
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numina-olympiads
    url: https://huggingface.co/datasets/project-numina/olympiads
    capture: hf-numina-olympiads/default/train/0000.parquet#row=1667
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Gegeven zijn reële getallen $a_{1}, a_{2}, \ldots, a_{2020}$, niet noodzakelijk verschillend. Voor elke $n \geq 2020$ wordt nu $a_{n+1}$ gedefinieerd als het kleinste reële nulpunt van het polynoom

$$
P_{n}(x)=x^{2 n}+a_{1} x^{2 n-2}+a_{2} x^{2 n-4}+\ldots+a_{n-1} x^{2}+a_{n}
$$

als dat bestaat. Veronderstel dat $a_{n+1}$ bestaat voor alle $n \geq 2020$. Bewijs dat $a_{n+1} \leq a_{n}$ voor alle $n \geq 2021$.
