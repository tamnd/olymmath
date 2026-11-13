---
tag: G9JS31CE0B
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numina-olympiads
    url: https://huggingface.co/datasets/project-numina/olympiads
    capture: hf-numina-olympiads/default/train/0000.parquet#row=1487
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=85261
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Vind alle functies $f: \mathbb{R} \rightarrow \mathbb{R}$ die voldoen aan

$$
f(x+x y+f(y))=\left(f(x)+\frac{1}{2}\right)\left(f(y)+\frac{1}{2}\right)
$$

voor alle $x, y \in \mathbb{R}$.

<!-- S2 -->
Find all functions $f: \mathbb{R} \rightarrow \mathbb{R}$ that satisfy

$$
f(x + x y + f(y)) = \left(f(x) + \frac{1}{2}\right)\left(f(y) + \frac{1}{2}\right)
$$

for all $x, y \in \mathbb{R}$.
