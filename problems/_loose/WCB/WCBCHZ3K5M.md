---
tag: WCBCHZ3K5M
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=209513
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Turkey/train/0000.parquet#row=111
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $t(n)$ be the sum of the digits in the binary representation of a positive integer $n,$ and let $k \geq 2$ be an integer.

**a.** Show that there exists a sequence $(a_i)_{i=1}^{\infty}$ of integers such that $a_m \geq 3$ is an odd integer and $t(a_1a_2 \cdots a_m)=k$ for all $m \geq 1.$

**b.** Show that there is an integer $N$ such that $t(3 \cdot 5 \cdots (2m+1))>k$ for all integers $m \geq N.$
