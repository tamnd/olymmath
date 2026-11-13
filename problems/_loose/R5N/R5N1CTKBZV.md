---
tag: R5N1CTKBZV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=259510
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a(x)$ and $b(x)$ be continuous functions on $[0,1]$ and let $0 \leq a(x) \leq a <1$ on that range. Under what other conditions (if any) is the solution of the equation for $u,$
$$ u= \max_{0 \leq x \leq 1} b(x) +a(x)u$$
given by
$$u = \max_{0 \leq x \leq 1} \frac{b(x)}{1-a(x)}.$$
