---
tag: 62CPFYBDJ0
kind: problem
type: answer
answer: \frac{r}{2} \binom{2r}{r}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=207130
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $r$ be a positive integer and let $N$ be the smallest positive integer such that the numbers $\frac{N}{n+r}\binom{2n}{n}$,
$n=0,1,2,\ldots $, are all integer. Show that $N=\frac{r}{2}\binom{2r}{r}$.
