---
tag: 8TY8CBCVEZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numina-olympiads
    url: https://huggingface.co/datasets/project-numina/olympiads
    capture: hf-numina-olympiads/default/train/0000.parquet#row=1799
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Beschouw een rechthoekig bord van $m \times n$ vakjes met $m, n \ge 1$. De hoekpunten van de vakjes vormen een $(m+1) \times (n+1)$-grid. We noemen een driehoek met hoekpunten punten van het grid *laag* als die minstens één zijde heeft die parallel is met een zijde van het bord zo dat de hoogte van de driehoek op die zijde 1 is. We noemen een lage driehoek *bijzonder* als die twee zijden heeft die parallel zijn met een zijde van het bord. We partitioneren het bord in lage driehoeken.

Bepaal het minimale aantal bijzondere driehoeken over alle mogelijke partitioneringen van het $m \times n$-bord.
