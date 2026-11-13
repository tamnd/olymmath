---
tag: CJSE4HXNXH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=204769
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For positive integers $a$ and $b$, define $$a!_b=\prod_{1\le i\le a\atop i \equiv a \mod b} i$$

Let $p$ be a prime and $n>3$ a positive integer. Show that there exist at least 2 different positive integers $t$ such that $1<t<p^n$ and $t!_p\equiv 1\pmod {p^n}$.
