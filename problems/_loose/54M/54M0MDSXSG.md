---
tag: 54M0MDSXSG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numina-olympiads
    url: https://huggingface.co/datasets/project-numina/olympiads
    capture: hf-numina-olympiads/default/train/0000.parquet#row=1750
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Zij $n \geq 3$ een vast natuurlijk getal. Er zijn $n$ dozen $A_{1}, A_{2}, \ldots, A_{n}$, elk met een aantal stenen erin $a_{1}, a_{2}, \ldots, a_{n}$ zo dat $a_{1}+a_{2}+\cdots+a_{n}=3 n$. Een zet bestaat uit de volgende handelingen:
kies een doos en verdeel alle stenen in de doos over de $n$ dozen (inclusief de gekozen doos) zo dat voor elke twee dozen het aantal toegevoegde stenen hoogstens 1 verschilt.

Voor een verdeling $a_{1}, a_{2}, \ldots, a_{n}$ definiëren we $f\left(a_{1}, a_{2}, \ldots, a_{n}\right)$ als het minste aantal benodigde zetten om alle stenen in één doos te krijgen. Zij $M_{n}$ het maximum van $f\left(a_{1}, a_{2}, \ldots, a_{n}\right)$ voor alle mogelijk verdelingen $a_{1}, a_{2}, \ldots, a_{n}$ zo dat $a_{1}+a_{2}+\cdots+a_{n}=3 n$. Bepaal $M_{n}$ en alle verdelingen $a_{1}, a_{2}, \ldots, a_{n}$ waarvoor $f\left(a_{1}, a_{2}, \ldots, a_{n}\right)=M_{n}$.

Voorbeeld. Als $n=4$ en de dozen bevatten 2, 6, 0, 4 stenen, dan kunnen we de 2 stenen uit doos $A_{1}$ uitdelen als 1,0,1,0. Na deze zet is het aantal stenen per doos 1, 6, 1, 4.
