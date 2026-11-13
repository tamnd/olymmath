---
tag: XJX73XQPED
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=79571
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Alice thinks of a polynomial $P$ whose coefficients are natural numbers; Bob's goal is to find $P(X)$. Here is what he can do: Bob must choose an integer $a$ that he reveals to Alice, and in exchange she gives him the value of $P(a)$. Then Bob chooses an integer $b$ that he reveals to Alice, and in exchange she gives him the value of $P(b)$. Bob has then won if he is able to identify $P(X)$: does he have a winning strategy?

Restart the problem assuming only that the coefficients of $P$ are integers.
