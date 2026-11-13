---
tag: VSN9G1BFJG
kind: problem
type: answer
answer: "32"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=88007
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine all natural numbers $n$ for which

$$
\lfloor\sqrt[4]{1}\rfloor+\lfloor\sqrt[4]{2}\rfloor+\ldots+\lfloor\sqrt[4]{n}\rfloor=\frac{3}{2} n+1
$$

( $\lfloor x\rfloor$ denotes the greatest integer not greater than $x$.)
