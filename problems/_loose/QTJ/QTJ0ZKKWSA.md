---
tag: QTJ0ZKKWSA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numina-olympiads
    url: https://huggingface.co/datasets/project-numina/olympiads
    capture: hf-numina-olympiads/default/train/0000.parquet#row=1784
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Initieel staat er een positief geheel getal $N$ op het schoolbord. We vervangen het getal herhaaldelijk aan de hand van de volgende regels:

- vervang het getal op het bord door een positief veelvoud van zichzelf,
- vervang het getal door een getal met dezelfde cijfers in een andere volgorde. (Het is toegestaan dat het nieuwe getal met een of meerdere nullen begint, die dan worden weggelaten.)

Bepaal voor welke waarden van $N$ het mogelijk is om 1 te krijgen na een serie van zetten.
Een voorbeeld van geldige zetten is $5 \rightarrow 20 \rightarrow 140 \rightarrow 041=41$.
