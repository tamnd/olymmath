---
tag: 7MXF40RS7M
kind: problem
type: answer
answer: \frac{6n^3 + n^2 - n}{6}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=241435
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In a competition, there were $2n+1$ teams. Every team plays exatly once against every other team. Every match finishes with the victory of one of the teams. We call cyclical a 3-subset of team ${ A,B,C }$ if $A$ won against $B$, $B$ won against $C$ , $C$ won against $A$.

(a) Find the minimum of cyclical 3-subset (depending on $n$);
(b) Find the maximum of cyclical 3-subset (depending on $n$).
