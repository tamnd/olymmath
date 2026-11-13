---
tag: 2CEE9XTAJK
kind: problem
type: answer
answer: No such integer triples with nonzero first entry exist.
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: fr
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/France/train/0000.parquet#row=265
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
Trouver tous les triplets d'entiers $(a, b, c)$ tels que $a \neq 0$ et
$$
2 a^{4} + 2 a^{2} b^{2} + b^{4} = c^{2}
$$
