---
tag: ERN3V40JAX
kind: problem
type: answer
answer: "45"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=161508
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Calculate

$$
\lfloor\underbrace{\sqrt{2017+\sqrt{2017+\cdots+\sqrt{2017+\sqrt{2017}}}}}_{2017 \text{ square roots }}\rfloor
$$

(With $\lfloor x\rfloor$ we denote the greatest integer not greater than $x$.)
