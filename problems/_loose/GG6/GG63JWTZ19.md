---
tag: GG63JWTZ19
kind: problem
type: answer
answer: \pi
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=219512
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For all natural numbers $n$, let $$A_n=\sqrt{2-\sqrt{2+\sqrt{2+\cdots+\sqrt{2}}}} \text{(n many radicals)}$$ **(a)** Show that for $n\geqslant 2$, $$A_n=2\sin\frac{\pi}{2^{n+1}}$$ **(b)** Hence or otherwise, evaluate the limit $$\lim_{n\to\infty} 2^nA_n$$
