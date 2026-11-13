---
tag: SABA40W6NH
kind: problem
type: answer
answer: x = y = z = 3
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: fr
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/France/train/0000.parquet#row=275
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: fr-tst
    source: hf-mathnet
    label: France Olympiades FRANçaises DE Mathématiques
---
Déterminer tous les nombres réels $x, y, z$ satisfaisant le système d'équations suivant :

$$
\begin{cases}
x = \sqrt{2y + 3} \\
y = \sqrt{2z + 3} \\
z = \sqrt{2x + 3}
\end{cases}
$$
