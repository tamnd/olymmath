---
tag: N52JMYG9AN
kind: problem
type: answer
answer: R1 + R2 = (AB × BC) / (2 √(AB^2 − (BC/2)^2))
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: fr
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/France/train/0000.parquet#row=69
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: fr-tst
    source: hf-mathnet
    label: France Olympiades Françaises de Mathématiques
---
Soit $ABC$ un triangle isocèle en $A$. Soient $M$ et $N$ deux points de $[BC]$. Les droites $[AM]$ et $[AN]$ recoupent le cercle circonscrit à $ABC$ en $P$ et $Q$.

1) Montrer que $M, N, P, Q$ sont cocycliques.

2) Soient $R_{1}$ et $R_{2}$ les rayons des cercles circonscrits à $BMP$ et $CMP$. Calculer $R_{1}+R_{2}$ en fonction des longueurs $AB$ et $BC$.
