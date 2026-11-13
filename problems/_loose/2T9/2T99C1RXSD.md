---
tag: 2T99C1RXSD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=185981
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine all triples $(x, y, z)$ of real numbers for which

$$
2 x + x^{2} y = y ; 2 y + y^{2} z = z ; 2 z + z^{2} x = x
$$

holds. Here, $x, y$, and $z$ should be expressed using given real numbers through repeated application of operations $+,-, \cdot, :$, real-valued power functions, exponential functions, trigonometric functions, or their real-valued inverse functions.
