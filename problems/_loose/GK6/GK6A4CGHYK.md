---
tag: GK6A4CGHYK
kind: problem
type: answer
answer: "9:10"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=76301
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a rectangle $A B C D$. Through point $A$ we draw a line that intersects segment $C D$ at point $X$ such that the areas of the resulting figures satisfy $S_{A X D}: S_{A B C X}=1: 2$. Through point $X$ we draw a line that intersects segment $A B$ at point $Y$ such that $S_{A X Y}: S_{Y B C X}=1: 2$. Finally, through point $Y$ we draw a line that intersects segment $X C$ at point $Z$ such that $S_{X Y Z}: S_{Y B C Z}=1: 2$.

Calculate the ratio of the areas $S_{A X D}: S_{A X Z Y}$.
