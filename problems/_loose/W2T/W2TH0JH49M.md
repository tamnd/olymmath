---
tag: W2TH0JH49M
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=29584
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove that if $m, n, p$ are arbitrary integers, then

$\sin \frac{m \pi}{p} \sin \frac{n \pi}{p} + \sin \frac{2 m \pi}{p} \sin \frac{2 n \pi}{p} + \sin \frac{3 m \pi}{p} \sin \frac{3 n \pi}{p} + \ldots$

$\ldots + \sin \frac{(p-1) m \pi}{p} \sin \frac{(p-1) n \pi}{p}=$

$$
=\left\{\begin{array}{l}
-\frac{p}{2}, \text { if } m+n \text { is divisible by } 2 p, \text { and } m-n \text { is not } \\
\text { divisible by } 2 p ; \\
\frac{p}{2}, \text { if } m-n \text { is divisible by } 2 p, \text { and } m+n \text { is not } \\
\text { divisible by } 2 p ; \\
0, \text { if } m+n \text { and } m-n \text { are both divisible or } \\
\text { both not divisible by } 2 p .
\end{array}\right.
$$
