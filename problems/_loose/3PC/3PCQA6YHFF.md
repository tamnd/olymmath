---
tag: 3PCQA6YHFF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=254375
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n\in\mathbb{N}$ be given. Prove that the following two conditions are equivalent:

$ (\text{i})\: n|a^n-a$ for any positive integer $a$;
$ (\text{ii})\:$ For any prime divisor $p$ of $n$, $p^2 \nmid n$ and $p-1|n-1$.
