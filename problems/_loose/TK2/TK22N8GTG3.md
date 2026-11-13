---
tag: TK22N8GTG3
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=250613
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Saudi_Arabia/train/0000.parquet#row=223
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $ABC$ be a triangle with incenter $I,$ and let $D,E,F$ be the midpoints of sides $BC, CA, AB$, respectively. Lines $BI$ and $DE$ meet at $P $ and lines $CI$ and $DF$ meet at $Q$. Line $PQ$ meets sides $AB$ and $AC$ at $T$ and $S$, respectively. Prove that $AS = AT$
