---
tag: RQNVBSD3H3
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: de
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Switzerland/train/0000.parquet#row=321
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ch-smo
    source: hf-mathnet
    label: Switzerland SMO - Finalrunde
---
Sei $a_{n}$ eine Folge natürlicher Zahlen definiert durch $a_{1}=m$ und $a_{n}=a_{n-1}^{2}+1$ für $n>1$. Ein Paar $(a_{k}, a_{l})$ nennen wir interessant, falls

(i) $0<l-k<2016$,

(ii) $a_{k}$ teilt $a_{l}$.

Zeige, dass ein $m$ existiert, sodass die Folge $a_{n}$ kein interessantes Paar enthält.
