---
tag: V20S4R9YNK
kind: problem
type: answer
answer: a \text{ must be a multiple of } 2009
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=253257
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all $a\in\mathbb{N}$ such that exists a bijective function $g :\mathbb{N} \to \mathbb{N}$ and a function $f:\mathbb{N}\to\mathbb{N}$, such that for all $x\in\mathbb{N}$,
$$f(f(f(...f(x)))...)=g(x)+a$$ where $f$ appears $2009$ times.

*(tatari/nightmare)*
