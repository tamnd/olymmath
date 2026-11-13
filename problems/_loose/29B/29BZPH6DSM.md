---
tag: 29BZPH6DSM
kind: problem
type: answer
answer: "144"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: fr
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/France/train/0000.parquet#row=339
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
On considère 7 îles $A_{1}, \ldots, A_{7}$. On est autorisé à construire des ponts, soit entre une île $A_{i}$ et l'île suivante $A_{i+1}$ (pour $i \in \{1,2, \ldots, 6\}$ ), soit entre une île $A_{i}$ et la dernière $A_{7}$ (pour $i \in \{1,2, \ldots, 6\}$ ). De combien de manières peut-on réaliser ces constructions avec le moins de ponts possibles de sorte que l'on puisse se rendre d'une île vers n'importe quelle autre ?

Exemple pour 3 îles au lieu de 7 : les trois constructions possibles utilisant deux ponts sont
1) un pont entre $A_{1}$ et $A_{2}$, et un pont entre $A_{1}$ et $A_{3}$
2) un pont entre $A_{1}$ et $A_{2}$, et un pont entre $A_{2}$ et $A_{3}$
3) un pont entre $A_{1}$ et $A_{3}$, et un pont entre $A_{2}$ et $A_{3}$.
