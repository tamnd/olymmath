---
tag: 2B0FSK6BH2
kind: problem
type: answer
answer: 'a: 4; b: k ≤ 52'
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: es
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Italy/train/0001.parquet#row=266
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: it-cesenatico
    source: hf-mathnet
    label: Italy XXXVII Olimpiade Italiana di Matematica
---
Una successione $x_{1}, x_{2}, \ldots, x_{n}, \ldots$ è costituita da un blocco iniziale di $p$ interi positivi distinti, che poi si ripetono periodicamente. Questo vuol dire che $\left\{x_{1}, x_{2}, \ldots, x_{p}\right\}$ sono $p$ interi positivi distinti, e $x_{n+p}=x_{n}$ per ogni intero positivo $n$.
I termini della successione non sono noti, e l'obiettivo è individuare il periodo $p$. Per far questo, ad ogni passaggio è possibile rivelare il valore di un termine della successione a propria scelta (e la scelta può dipendere dall'esito dei passaggi precedenti).

a. Sapendo a priori che $1 \leq p \leq 10$, determinare il minimo $n$ per cui esiste una strategia che permette di individuare con certezza $p$ rivelando al più $n$ termini.

b. Sapendo a priori che $p$ è uno dei primi $k$ numeri primi, determinare per quali valori di $k$ esiste una strategia che permette di individuare con certezza $p$ rivelando al più 5 termini.
