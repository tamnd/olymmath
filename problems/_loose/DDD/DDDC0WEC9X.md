---
tag: DDDC0WEC9X
kind: problem
type: answer
answer: Antonio wins if at least one of m or n is odd; Bernardo wins if both m and n are even.
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: es
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Italy/train/0000.parquet#row=209
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: it-cesenatico
    source: hf-mathnet
    label: Italy Olimpiade Italiana di Matematica
---
Antonio e Bernardo giocano al seguente gioco: sono date due pile di gettoni, una con $m$ gettoni e l'altra con $n$ gettoni. Ogni giocatore sceglie a turno una delle seguenti mosse:
- prendere un gettone da una delle pile;
- prendere un gettone da ciascuna delle pile;
- spostare un gettone da una pila ad un'altra.
Perde chi non può più muovere. Comincia Antonio. Determinare, in funzione di $m$ ed $n$, se uno dei due giocatori ha una strategia vincente, e in caso affermativo specificare di quale giocatore si tratta.
