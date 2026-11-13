---
tag: 2PJYRBZCD2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=267159
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $T=\text{TNFTPP}$. Consider the sequence $(1, 2007)$. Inserting the difference between $1$ and $2007$ between them, we get the sequence $(1, 2006, 2007)$. Repeating the process of inserting differences between numbers, we get the sequence $(1, 2005, 2006, 1, 2007)$. A third iteration of this process results in $(1, 2004, 2005, 1, 2006, 2005, 1, 2006, 2007)$. A total of $2007$ iterations produces a sequence with $2^{2007}+1$ terms. If the integer $4T$ (that is, $4$ times the integer $T$) appears a total of $N$ times among these $2^{2007}+1$ terms, find the remainder when $N$ gets divided by $2007$.
