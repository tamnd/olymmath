---
tag: XHCYFK2PJE
kind: problem
type: answer
answer: \frac{2}{\pi}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=212484
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be a positive integer.

(1) For a positive integer $k$ such that $1\leq k\leq n$, Show that :
$$\int_{\frac{k-1}{2n}\pi}^{\frac{k}{2n}\pi} \sin 2nt\cos t\ dt=(-1)^{k+1}\frac{2n}{4n^2-1}(\cos \frac{k}{2n}\pi +\cos \frac{k-1}{2n}\pi).$$

(2) Find the area $S_n$ of the part expressed by a parameterized curve $C_n: x=\sin t,\ y=\sin 2nt\ (0\leq t\leq \pi).$

If necessary, you may use ${\sum_{k=1}^{n-1} \cos \frac{k}{2n}\pi =\frac 12(\frac{1}{\tan \frac{\pi}{4n}}-1})\ (n\geq 2).$

(3) Find $\lim_{n\to\infty} S_n.$
