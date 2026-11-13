---
tag: WQ4G8JBNQW
kind: problem
type: answer
answer: f(101) = 101^k
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=253671
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\mathbb{N}$ be the set of positive integers. Across all function $f:\mathbb{N}\to\mathbb{N}$ such that $$mn+1\text{ divides } f(m)f(n)+1$$ for all positive integers $m$ and $n$, determine all possible values of $f(101).$
