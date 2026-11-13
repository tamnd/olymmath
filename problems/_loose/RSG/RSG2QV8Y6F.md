---
tag: RSG2QV8Y6F
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=83394
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In a competition, there are $a$ candidates and $b$ judges. Each judge gives each candidate the rating "OK" or "KO".

Let $k$ be an integer such that, given any two judges, their ratings coincide for at most $k$ candidates. Show that $k \geqslant \frac{a}{2} \frac{b-2}{b-1}$.
