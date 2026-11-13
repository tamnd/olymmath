---
tag: 7HQRB5ZBR4
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=266112
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a=3^{1/223}+1$ and for all $n \ge 3$ let $$f(n)= \dbinom{n}{0} a^{n-1} - \dbinom{n}{1} a^{n-2} + \dbinom{n}{2} a^{n-3}- ... +(-1)^{n-1} \dbinom{n}{n-1} a^0.$$ Find $f(2007)+f(2008).$
