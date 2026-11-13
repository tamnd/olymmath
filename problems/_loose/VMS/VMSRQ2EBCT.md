---
tag: VMSRQ2EBCT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=85479
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
You have one card with the number 12 on it. You are allowed to add new cards to your collection according to the following rules.

- If you already have a card with a number $a$, then you may create a new card with the number $2a + 1$.
- If you already have a card with a number $b$ that is divisible by 3, then you may create a new card with the number $\frac{b}{3}$.

(a) Show that you can make a card with the number 29 on it.

(b) Show that you can make a card with the number $2^{2012} - 1$ on it.

(c) Show that you can never make a card with the number 100 on it.
