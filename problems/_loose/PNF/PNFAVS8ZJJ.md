---
tag: PNFAVS8ZJJ
kind: problem
type: answer
answer: Exactly those lamps whose numbers are perfect squares
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: fr
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/France/train/0000.parquet#row=359
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
On a $n$ lampes, chacune avec un interrupteur. Chaque lampe fonctionne normalement, appuyer sur son interrupteur l'éteint si elle est allumée, et l'allume si elle est éteinte. Toutes les minutes on touche aux interrupteurs.

À la première minute : on appuie sur tous les interrupteurs $(1,2,3, \ldots, n)$.

À la deuxième minute : on appuie sur tous les interrupteurs dont la lampe a un numéro pair $(2,4,6, \ldots)$.

À la troisième minute : on appuie sur tous les interrupteurs dont la lampe a un numéro divisible par $3\ (3,6,9, \ldots)$.

Et ainsi de suite, à la $k$-ième minute, on appuie sur les interrupteurs avec un numéro divisible par $k$.

Quelles sont les lampes qui sont allumées après $n$ minutes sachant qu'au début toutes les lampes sont éteintes ?
