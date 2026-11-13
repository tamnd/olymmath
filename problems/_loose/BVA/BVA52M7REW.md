---
tag: BVA52M7REW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240860
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Suppose that for every $n$ the number $m(n)$ is chosen such that $m(n)\ln(m(n))=n-\frac 12$. Show that $b_n$ is asymptotic to the following expression where $b_n$ is the $n-$th Bell number, that is the number of ways to partition $\{1,2,\ldots,n\}$:
$$ \frac{m(n)^ne^{m(n)-n-\frac 12}}{\sqrt{\ln n}}. $$
Two functions $f(n)$ and $g(n)$ are asymptotic to each other if $\lim_{n\rightarrow \infty}\frac{f(n)}{g(n)}=1$.
