---
tag: SD24PF5CEA
kind: problem
type: answer
answer: a_{2k}=\frac{x^{k-1}-y^{k-1}}{\sqrt{2}}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=83279
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $A B C D E F G H$ be a regular octagon. A pawn is initially placed on $A$ and moves to one of its neighbors at each turn (when the pawn is on $A$, it can move to $B$ or $H$). The game ends when the pawn reaches the vertex $E$ for the first time.

Let $a_{n}$ denote the number of "games" that last exactly $n$ moves (and thus end at $E$). Show that

$$
a_{2 k-1}=0 \text { and } a_{2 k}=\frac{x^{k-1}-y^{k-1}}{\sqrt{2}}
$$

with $x=2+\sqrt{2}$ and $y=2-\sqrt{2}$.
