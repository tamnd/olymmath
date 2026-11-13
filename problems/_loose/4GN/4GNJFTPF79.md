---
tag: 4GNJFTPF79
kind: problem
type: answer
answer: (n!)^2 2^n
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: de
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Switzerland/train/0000.parquet#row=400
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Sei $n$ eine natürliche Zahl. Ein Volleyballteam bestehend aus $n$ Frauen und $n$ Männern stellt sich für ein Spiel auf. Dabei besetzt jedes Teammitglied eine der Positionen $1,2, \ldots, 2 n$, wobei sich genau die Positionen $1$ und $n+1$ ausserhalb des Spielfelds befinden. Während des Spiels rotieren alle Teammitglieder, wobei jeweils von der Position $i$ auf die Position $i+1$ gewechselt wird (respektive von $2 n$ auf $1$). Wie viele Möglichkeiten gibt es für die Startaufstellung, sodass immer mindestens $n-1$ Frauen auf dem Spielfeld sind, egal wie oft rotiert wird?

Bemerkung: Zwei Startaufstellungen sind unterschiedlich, wenn mindestens ein Teammitglied eine andere Position besetzt.
