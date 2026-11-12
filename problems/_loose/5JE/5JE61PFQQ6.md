---
tag: 5JE61PFQQ6
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numina-olympiads
    url: https://huggingface.co/datasets/project-numina/olympiads
    capture: hf-numina-olympiads/default/train/0000.parquet#row=1614
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Gegeven is een verzameling $A$ van functies $f: \mathbb{R} \rightarrow \mathbb{R}$. Voor alle $f_{1}, f_{2} \in A$ bestaat er een $f_{3} \in A$ zodat

$$
f_{1}\left(f_{2}(y)-x\right)+2 x=f_{3}(x+y)
$$

voor alle $x, y \in \mathbb{R}$. Bewijs dat voor alle $f \in A$ geldt:

$$
f(x-f(x))=0
$$

voor alle $x \in \mathbb{R}$.
