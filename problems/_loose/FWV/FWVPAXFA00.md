---
tag: FWVPAXFA00
kind: problem
type: answer
answer: "1639"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=165380
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We have defined a binary operation, denoted by $*$, on the set of integers, for which the following properties hold:

1) $x * 0=x$ for all integers $x$;
2) $0 * y=-y$ for all integers $y$;
3) $((x+1) * y)+(x *(y+1))=3(x * y)-x y+2 y$ for all integers $x, y$.

Determine the result of the operation $19 * 90$.
