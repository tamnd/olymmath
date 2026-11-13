---
tag: 1VYQ30GNDS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=137785
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $A B C D$ be a $20 \times 12$ rectangular grid board $(A B=20)$. Let $r$ be a given natural number. A chess piece can be moved from one cell to another if and only if the centers of the two cells are $\sqrt{r}$ units apart. It is known that there is a single chess piece placed in the corner cell with vertex $A$ at the top-left corner. Our goal is to move the chess piece to the corner cell with vertex $B$ at the top-right corner.
(i) Prove that the goal cannot be achieved if $2 \mid r$ or $3 \mid r$;
(ii) Prove that the goal can be achieved if $r=73$;
(iii) Can the goal be achieved if $r=97$?
