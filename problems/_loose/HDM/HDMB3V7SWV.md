---
tag: HDMB3V7SWV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: pt
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Brazil/train/0000.parquet#row=115
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Num tabuleiro $5 \times 5$, um cavaleiro do jogo de xadrez está na casa marcada com $A$. Depois ele se move marcando as casas por onde passa:

$A \rightarrow B \rightarrow C \rightarrow D \rightarrow E \rightarrow F \rightarrow G \rightarrow H$.

| $A$ | | | | $G$ |
| :--- | :--- | :--- | :--- | :--- |
| | | $H$ | | |
| | $B$ | | $F$ | |
| | | $D$ | | |
| $C$ | | | | $E$ |

Partindo da casa $H$, o cavaleiro se move pelo tabuleiro até ter passado por todas as 25 casas. Descreva o trajeto que ele fez.
