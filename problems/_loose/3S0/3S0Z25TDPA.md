---
tag: 3S0Z25TDPA
kind: problem
type: answer
answer: floor((2p+1)/3)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Iran/train/0000.parquet#row=378
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo
    source: hf-mathnet
    label: Iran Iranian Mathematical Olympiad
---
Let $p$ be a prime number. There are several cards on the table. Numbers $0$, $1$, $\dots$, $p-1$ are written on them such that $0$ is written once and each of $1$, $2$, $\dots$, $p-1$ is written at most once. For any two cards with numbers $x$ and $y$ on them, respectively, we determine the *winner* card such that;

i. If card $x$ wins over card $y$ and card $y$ wins over card $z$, then card $x$ wins over card $z$;

ii. If card $x$ won't be defeated by card $y$ and card $z$ won't be defeated by card $t$, then if the cards $x+z$ and $y+t$ both are existing, then card $x+z$ won't be defeated by the card $y+t$. (We do the addition modulo $p$.)

*Note. We say a card *wont be defeated by the other card* if it neither wins over it nor being identical to the other card.*

Determine the maximum number of cards that such a rule-based game would become possible.
