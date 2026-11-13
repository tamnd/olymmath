---
tag: JAZ3E9TCNY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: es
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Italy/train/0000.parquet#row=306
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: it-cesenatico
    source: hf-mathnet
    label: Italy Cesenatico
---
Francesca e Giorgia fanno il seguente gioco. Su un tavolo ci sono inizialmente alcune colonne di monete. Ogni colonna contiene un certo numero di monete, che può eventualmente variare da colonna a colonna. A turno, ogni giocatrice fa una e una sola delle seguenti possibili mosse:
- sceglie una colonna contenente un numero pari non nullo $2k$ di monete e la sostituisce con due colonne contenenti $k$ monete ciascuna;
- leva dal tavolo tutte le colonne contenenti un numero dispari di monete.
Nel caso in cui non fosse possibile effettuare una mossa del primo tipo, la giocatrice ne farà necessariamente una del secondo tipo, e viceversa.
Inizia Francesca. Vince chi prende dal tavolo l'ultima moneta.

a. Se inizialmente sul tavolo c'è una sola colonna, la quale contiene $2008^{2008}$ monete, quale giocatrice ha una strategia vincente?

b. Per quali configurazioni iniziali Francesca ha una strategia vincente?
