---
tag: WGYPS360Y5
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=244641
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all functions $f : Z \to Z$ satisfying
$\bullet$ $ f(p) > 0$ for all prime numbers $p$,
$\bullet$ $p| (f(x) + f(p))^{f(p)}- x$ for all $x \in Z$ and all prime numbers $p$.
